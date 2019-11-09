# Angular  

The following steps are being documented to deploy the officemap sample as an npm library.  

First confirm that you have Angular available.  

<code>ng --version</code>

If the command above returns "command not found", update npm and node. Mac users may find that updating via Brew does not associate the ng command. Instead, use [the npm and node installer](https://www.npmjs.com/get-npm).  Then run:  

<code>npm install -g @angular/cli</code>  

## Angular Module 

[Angular 6 - Create a module that can be installed with NPM](https://www.competa.com/blog/angular-6-create-a-module-that-can-be-installed-with-npm/)  

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


<code>ng generate library officemap  
ng build officemap --watch  
</code>

Note: Your app can not use your library before you build it.
<!--
If upgrading, since already the default.
	Add the following in your tsconfig.lib.json for the --watch command.

<code>"angularCompilerOptions": {
    "enableResourceInlining": true,
}</code>
-->


Add to projects/officemap/src/lib/officemap.module.ts  
(Need to confirm adding these next two lines is needed.)
<!-- ng build is not completing with this on work computer...  -->

<code>import { OfficemapModule } from 'officemap';</code>

And in the imports array in the same .ts file:  

<code>imports: [OfficemapModule]</code>


Build for production:  

<code>ng build officemap --prod</code>

Publish to npm:  

<code>cd dist/avatar1  
npm publish
</code>


## Heros App

We'll be adding a map to John Papa's Angular Hero app, which provides an opportunity to compare Angular with Vue and React, and includes Cypress for testing.  

[heroes-angular](https://github.com/johnpapa/heroes-angular)

<code>npm install</code>

After npm update, followed instructions to update and fix.  
<!--Might not be necessary, note error next time.-->
Next time, check if reloading pages retains user edit prior to updating.  

<code>npm update
npm audit fix</code>

<!--
No effect:
Ran npm update again since this error remained: Browserslist: caniuse-lite is outdated. Please run next command `npm update`
-->

<code>npm run quick</code>

You'll need to close your existing server if it's running on port 4200.  
Neither of these commands worked for assigning to a different port:  
npm run quick -p 4227  
ng serve --port 4227 (Frontend loads, but not json backend.)  

Open Cypress to run tests:  

<code>npm run cypress</code>

Same as running: node_modules/.bin/cypress open  