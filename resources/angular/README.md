# Angular  

The following documents how to deploy an npm library using Angular.  
In Progress: combining a member list view with the HERE Geocoder API for marker positioning by address.  

First, confirm you have Angular CLI installed on your local machine.  

<code>ng --version</code>

If the command above returns "command not found", update npm and node. Mac users may find that updating via Brew does not associate the ng command. Instead, use [the npm and node installer](https://www.npmjs.com/get-npm).  Then run:  

<code>npm install -g @angular/cli</code>  

The following steps were prepared using Angular 8. 
Check for version changes in the [Angular Update Guide](https://update.angular.io/)  


## Angular Module 
<!--
[Angular 6 - Create a module that can be installed with NPM](https://www.competa.com/blog/angular-6-create-a-module-that-can-be-installed-with-npm/)  
-->
Based on [Angular.io Creating Libraries](https://angular.io/guide/creating-libraries)

Create a new project:  

<code>ng new avatar1
cd avatar1
ng serve
</code>

Choose: Would you like to add Angular routing? y  
Which stylesheet format would you like to use? SCSS  

Open [http://localhost:4200/](http://localhost:4200/)  

To serve at another port:  ng serve --port 8080  
Also: --host 0.0.0.0 

At this point you'll need to open a new termininal window since the initial one is dedicated to serving the site.  

**Create a library within your project:**  
   
You can replace "modelearth" with your unique [npm](https://www.npmjs.com/) username.  

<code>ng generate library @modelearth/officemap</code>

--watch is included for faster incremental (partial) builds which emit amended files.  

Note: Your app can not use your library before you build it.
<!--
If upgrading, since already the default.
	Add the following in your tsconfig.lib.json for the --watch command.

<code>"angularCompilerOptions": {
    "enableResourceInlining": true,
}</code>
-->

<code>ng build @modelearth/officemap --watch
ng test @modelearth/officemap
ng lint @modelearth/officemap
</code>

The Angular test uses Karma with Jasmine.  (Cypress is used for the Hero app test below.)

The public API for your library is maintained in the public-api.ts file in your library folder.  


While working on a published library, you can use npm link to avoid reinstalling the library on every build.  

<!-- ng build did not completing with this on work computer...  -->

<!--
Skip next 2. May not apply to Angular 8: Add to projects/@modelearth/officemap/src/lib/@modelearth/officemap.module.ts  
(Need to confirm adding these next two lines are needed.)
<code>import { @modelearth/officemapModule } from '@modelearth/officemap';</code>

And in the imports array in the same .ts file:  
<code>imports: [@modelearth/officemapModule]</code>
-->


<!--
--prod flag Not used anymore for library builds since Ahead-of-Time (AOT) compiler is automatically applied.
https://angular.io/guide/aot-compiler

Build for production:  

<code>ng build @modelearth/officemap --prod</code>
-->


Publish to npm:  

<code>cd dist/modelearth/officemap 
npm login
npm publish --access=public
</code>


After a few minutes, your package will appear in your list of packages: [https://www.npmjs.com/~modelearth](https://www.npmjs.com/~modelearth)  

Also see: [The way the industry publishes packages](https://zellwk.com/blog/publish-to-npm/) for automation with GitHub.  


## Heros App

We'll be adding a map to John Papa's Angular Hero app, which provides an opportunity to compare Angular with Vue and React, and includes Cypress for testing.  

[heroes-angular](https://github.com/johnpapa/heroes-angular)

```
npm install
```

Launch the app on port 4200:  

```
npm run quick
```

You'll need to close your existing server if it's running on port 4200.  
Neither of these commands assigned to a different port:  
npm run quick -p 4227  
ng serve --port 4227 (Frontend loads, but not json backend.)  

The next two commands may be needed if your edits disappear after hitting refresh.     

<code>npm update
npm audit fix</code>

<!--
No effect:
Ran npm update again since this error remained: Browserslist: caniuse-lite is outdated. Please run next command `npm update`
-->

Open Cypress to run tests:  

<code>npm run cypress</code>

Same as running: node_modules/.bin/cypress open  


## HERE Address Geocoding

Next we'll render a Leaflet map with Angular and display map markers using the HERE Geocoder API.  

Create a new Angular project.  Since this is a simple project, we won’t have a router. CSS can also be selected.

```
ng new leaflet-project
ng update
ng update rxjs
```
Running "ng update rxjs" before making changes below avoids this response if running later:  
Repository is not clean.  Please commit or stash any changes before updating.


Set your src/index.html file as:  

```
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>LeafletProject</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css">
    </head>
    <body>
        <app-root></app-root>
        <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
    </body>
</html>
```

Add a component. 

```
ng g component here-map
```

Add the following #map attribute to *here-map.component.html* as our reference to the DOM from our TypeScript code.

```
<div #map [style.height]="height" style="width: 100%;"></div>
```

Follow the steps [from HERE](https://developer.here.com/blog/render-and-interact-with-here-location-data-using-leaflet-and-angular) and add the following corrections:   

Angular 8 requires changing app.component.ts line 16 to build, then change back to view map points in brower.

Issue: https://github.com/angular/angular-cli/issues/14553  

Change line 16:

```
@ViewChild("map")
```
To

```
@ViewChild('map',{ read: true, static: false })
```


In here-map.component.ts, we set ViewChild to reference our #map attribute from the HTML.  

We initialize Leaflet within the public ngAfterViewInit, and include the map tile API via this.srcTiles.  

When the dropMarker method is executed, we make a request to the HERE Geocoder API which passes in an address as our searchtext.  

<!--
Wasn't needed
Change:

```
let location = result.Response.View[0].Result[0].Location.DisplayPosition;
```

To: 

```
const location = result['Response']['View'][0]['Result'][0]['Location']['DisplayPosition']; 
```
-->

In the HERE Developer section, choose your Freemium project. Under the REST & XYZ HUB API/CLI click "Generate App ID and App Code".  

Add the following to the top of src/app/app.component.html.

<!--
	Since we didn't include a router, everything will be rendered inside the project’s file. 
	Note, calling the attribute #map here is just a coincidence. 
-->


```
<here-map #map appId="APP-ID-HERE" appCode="APP-CODE-HERE"></here-map>
```
 
Open the geocoder map in a new port if you are already using default 4200 port.  


```
ng serve --port 4201
```

<!--
https://angular.io/styleguide#style-09-01  


Add below: { read: true, static: false }  and in here-map.component.ts  


```
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { HereMapComponent } from './here-map/here-map.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    @ViewChild('map',{ read: true, static: false })
    public mapElement: HereMapComponent;

    public ngOnInit() { }

    public ngAfterViewInit() {
        this.mapElement.dropMarker('tracy, ca');
        this.mapElement.dropMarker('lathrop, ca');
    }

}
```
-->

