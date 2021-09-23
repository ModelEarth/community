
## JQuery/React - Environmental Profile Directory - YAML Editor

We'll be updating a metadata editing process created by Italy to edit any entity profile stored on GitHub.  
We're combining the best of these two lable styles by placing only the number on the right side.

<div style="border:1px solid #ccc; padding:15px; display: inline-block; margin-bottom:10px">
<a href="../../../io/template/"><img src="../../../io/template/img/2-labels.png" style="width:100%; max-width:600px"></a>
</div>

View our [impact profile summaries inspired by "nutritional labels"](../../../io/template/) for communities, companies, products and individuals.  

[Our upcoming profile-editor](https://modelearth.github.io/profile-editor) is a fork of Italy's publiccode-editor which saves Metadata settings in a file residing on GitHub. [Clone our Fork](https://github.com/modelearth/profile-editor). Code for America's version saves directly to GitHub. Our update will allow the form to be viewed before logging into GitHub.  

[View Interface - Italy](https://publiccode-editor.developers.italia.it/) - Best interface example currently, [view schema](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/schema.core.html#top-level-keys-and-sections)  
[View Interface - America](https://codeforamerica.github.io/publiccode-pusher/) - Would be best to remove initial login requirement so fields can be viewed - [Issue](https://github.com/codeforamerica/publiccode-pusher/issues/13)  

View our paser for displaying [YAML and JSON as HTML](../../../io/template/parser/) (Might require hitting reload.)

TO DO:  
1. Add a Goods and Services section stored in sectors.yml and include an "Add" button for choosing sectors.
1. Pull the list of sectors from the [sectors.json file](https://github.com/modelearth/io/tree/master/build/api/USEEIOv2.0) in the built USEEIO-widgets repo used by the [io widgets](https://model.earth/io/charts/).
1. Include a field beside each selected sector for the dollar/euro amounts per year. [See OpenLCA tabulator](../../../apps/smm/).
1. Save the Goods and Services (skillbank) to the GitHub Repo in the sectors.yml file.  
1. Provide fields for indicating when an entity's Goods and Services are more sustainable than the average provider.  
1. Include a field for setting the year and save prior years as: sectors-2020.yml, etc.  
1. Store additional entity info for organizations and individuals in a file called profile.yml.  

More about Code for America's [Public Code Pusher](https://brigade.cloud/projects/publiccode-helper/).  

Possible EDP form sample: [ClimateEarth.com demo](https://www.climateearth.com/command-qc-demo-sign-up/)  
Also, [GreenDelta Java EPD editor](https://github.com/GreenDelta/epd-editor)  
[Amazon employee's "Communicating EDP's" article with "Nutrition" Label](https://www.linkedin.com/pulse/amazon-has-unparalleled-opportunity-drive-low-carbon-products-guest/)  

---
[Impact Profiles](../../../io/template/) and [3.0 Mockup](../../../apps/smm/)