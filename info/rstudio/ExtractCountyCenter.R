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
county = st_read('shapefile/Counties_Georgia/Counties_Georgia.shp')
zcta = st_read
#show a map
tm_shape(county) + tm_polygons(col = 'totpop10')


getCentroidCSV = function(shapefile) {
  centroid = st_centroid(shapefile)
  coord = as.data.frame(st_coordinates(centroid))
  colnames(coord) = c('lat','lon')
  centroid = centroid %>% st_drop_geometry(.) %>% cbind(.,coord)
  return(centroid)
} 
countyc = getCentroidCSV(county)
zctac = getCentroidCSV(zcta)
write.csv(countyc,'GAcounties.csv')
write.csv(zctac,'GApostalcodes.csv')