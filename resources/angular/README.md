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

<!--Not sure if this is correct.  ng build is not completing.  -->
Add to projects/officemap/src/lib/officemap.module.ts  

<code>import { OfficemapModule } from 'officemap';</code>

And in the imports array in the same .ts file:  

<code>imports: [OfficemapModule]</code>


Build for production:  

<code>ng build officemap --prod</code>

Publish to npm:  

<code>cd dist/avatar1  
npm publish
</code>