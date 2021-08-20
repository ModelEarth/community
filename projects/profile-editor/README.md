
## I. React - Environmental Profile Editor Team

[Create impact summeries inspired by "nutritional labels"](../../io/template/)  
Edit entity profiles to include goods and services and individual carbon footprints using OpenEPD YAML.  

Edit our [profile-editor](https://github.com/modelearth/profile-editor) fork of Italy's publiccode-editor to save selected Goods and Services in a file called sectors.yml. Saved list will be used for Life Cycle Analysis (LCA) of company and individual carbon footprints.

[View Interface - Italy](https://publiccode-editor.developers.italia.it/) - Best interface example currently, [view schema](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/schema.core.html#top-level-keys-and-sections)  
[View Interface - America](https://codeforamerica.github.io/publiccode-pusher/) - Initial login requirement to be [removed](https://github.com/codeforamerica/publiccode-pusher/issues/13)  

1. Add a Goods and Services section stored in sectors.yml and include an "Add" button for choosing sectors.
1. Pull the list of sectors from the [sectors.json file](https://github.com/modelearth/io/tree/master/build/api/USEEIOv2.0) in the built USEEIO-widgets repo used by the [io widgets](https://model.earth/io/charts/).
1. Include a field beside each selected sector for the dollar/euro amounts per year.  
1. Save the Goods and Services (skillbank) to the GitHub Repo in the sectors.yml file.  
1. Provide fields for indicating if each of entity's Goods and Services are more sustainable than the average provider.  
1. Include a field for setting the year and save prior years as: sectors-2020.yml, etc.  
1. Store additional entiy info for organizations and individuals in a file called profile.yml.  

More about Code for America's [Public Code Pusher](https://brigade.cloud/projects/publiccode-helper/).  

Possible EDP form sample: [ClimateEarth.com demo](https://www.climateearth.com/command-qc-demo-sign-up/)  
Also, [GreenDelta Java EPD editor](https://github.com/GreenDelta/epd-editor)  
[Amazon employee's "Communicating EDP's" article with "Nutrition" Label](https://www.linkedin.com/pulse/amazon-has-unparalleled-opportunity-drive-low-carbon-products-guest/)  
