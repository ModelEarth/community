## React - YAML Profile Editor for GitHub MetaData

We're building profiles based on Environmental Product Declarations (EPD). 
<!-- created a seetings-layout branch, 

	then switched to githubpages branch -->

[Our profile-editor](https://modelearth.github.io/profile-editor) is a fork of Italy's publiccode-editor which saves Metadata settings in a file residing on GitHub. [Clone our Fork](https://github.com/modelearth/profile-editor). Code for America's version saves directly to GitHub. Our update will allow the form to be viewed before logging into GitHub.  

[View Interface - Italy](https://publiccode-editor.developers.italia.it/) - Best interface example currently, [view schema](https://docs.italia.it/italia/developers-italia/publiccodeyml-en/en/master/schema.core.html#top-level-keys-and-sections)  
[View Interface - America](https://codeforamerica.github.io/publiccode-pusher/) - Would be best to remove initial login requirement so fields can be viewed - [Issue](https://github.com/codeforamerica/publiccode-pusher/issues/13)  

View our paser for displaying [YAML and JSON as HTML](../../../io/template/parser/) (Might require hitting reload.)

<a href="https://model.earth/profile-editor/"><img src="../../../community/projects/profile-editor/img/profile-editor.png" style="width:100%; border:1px solid #999"></a>

NOTE:
Since we're not editing the github-pages branch within our fork,
Copy the content of "dist" into "docs" folder. Only the app.bundle.js file changes.

TO DO:  
1. Add ability to save to GitHub, but avoid using React Redux.
1. Add optional skillbank section: "3. Goods and Services" 
1. Display sections in left column (like Google Chrome settings)
1. Include an "Add" button for choosing sectors.
1. Pull the list of sectors from the [sectors.json file](https://github.com/modelearth/io/tree/master/build/api/USEEIOv2.0) in the built USEEIO-widgets repo used by the [io widgets](https://model.earth/io/charts/).
1. Save the Goods and Services to the GitHub Repo in the sectors.yml file.
1. Include a field beside each selected sector for the dollar/euro amounts per year. [See OpenLCA tabulator](../../../apps/smm/).
1. Provide percentage field for indicating when an entity's Goods and Services are more sustainable than the average provider.  
1. Include a field for editing the year and save prior years as: sectors-2020.yml, etc.  
1. Store additional entity info for organizations and individuals in a file called profile.yml or entity.yml.  

UPDATED:
In "profile-editor" branch, renamed to: Profile Editor, added custom.scss containing: sidebar { order: -1;
} to move to left side. Updated src/asset/style.scss to include: @import "./custom.scss";



More about Code for America's [Public Code Pusher](https://brigade.cloud/projects/publiccode-helper/).  

We'll optimize <a href="../../../io/template/feed/">our call to the openEPD API</a> for the <a href="../../../localsite/info/#show=openepd&mapview=state&state=GA">OpenEPD map display</a> to load faster by fetching fewer fields. You'll find the "openEPD" settings in our <a href="../../../localsite/js/map.js">localsite/js/map.js</a> file.<br><br>

This page contains [just the maps](https://model.earth/localsite/map/#show=openepd&mapview=state&state=GA) (note how slow the marker point (map1) is.  

Possible EDP form sample: [ClimateEarth.com demo](https://www.climateearth.com/command-qc-demo-sign-up/)  
Also, [GreenDelta Java EPD editor](https://github.com/GreenDelta/epd-editor)  
[Amazon employee's "Communicating EDP's" article with "Nutrition" Label](https://www.linkedin.com/pulse/amazon-has-unparalleled-opportunity-drive-low-carbon-products-guest/)  

---
[Impact Profiles](../../../io/template/) and [3.0 Mockup](../../../apps/smm/)