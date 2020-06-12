# package installment
for (package in c('sf','tmap','readr','tidyverse')) {
  if (!require(package,character.only = TRUE)) {
    install.packages(package)
    library(package)
  }
}
# working directory, make sure it is in accordance with the actual directory where shapefile is located in your local machine
setwd("/Users/eloncha/Documents/GitHub/community/info/rstudio")
tmap_mode('view')

# read shapefile
state = st_read('shapefile/tl_2019_us_state/tl_2019_us_state.shp') %>% filter(NAME =='Georgia')
county = st_read('shapefile/Counties_Georgia/Counties_Georgia.shp')
county_text = st_drop_geometry(county)
county = st_transform(county, crs = 4269)
zcta = st_read('shapefile/tl_2016_us_zcta510/tl_2016_us_zcta510.shp')
zcta2 = st_drop_geometry(zcta)
zcta_text = read_csv('shapefile/zcta_crosswalk') %>% filter(STATE ==13)

GAzcta = left_join(zcta_text,zcta2, by = c('ZCTA5' = 'GEOID10')) %>% 
  mutate(lat = as.numeric(as.character(INTPTLAT10)), lon = as.numeric(as.character(INTPTLON10))) %>%
  left_join(., county_text, by = c('COUNTY' = 'COUNTYFP10'))
write.csv(GAzcta,'GApostalcodes.csv')

getCentroidCSV = function(shapefile) {
  centroid = st_centroid(shapefile)
  coord = as.data.frame(st_coordinates(centroid))
  colnames(coord) = c('lat','lon')
  centroid = centroid %>% st_drop_geometry(.) %>% cbind(.,coord)
  return(centroid)
} 
countyc = getCentroidCSV(county)
write.csv(countyc,'GAcounties.csv')
