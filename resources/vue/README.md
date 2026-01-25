# Vue  

<!-- https://model.earth/community/resources/vue/ -->

Try this next: [Build a Vue App with Firebase Authentication and Database](https://blog.bitsrc.io/build-a-vue-app-with-firebase-authentication-and-database-e7d6816f79af)

Static site generation: [VuePress](https://vuepress.vuejs.org/) and [Nuxt](https://nuxtjs.org/).  

---

###Errors occured with this Gridsome Firebase starter:  

[Posted issue for Bug3 below.](https://github.com/u12206050/gridsome-firebase-starter/issues/6) - Check if fixed.  

[Gridsome + Firebase: Starter for your next static yet dynamic site](https://medium.com/day4/gridsome-firebase-starter-for-your-next-static-yet-dynamic-site-a0676bb5b8ba)  

[Gridsome Firebase Starter - GitHub](https://github.com/u12206050/gridsome-firebase-starter)
<!-- Also potentially useful https://blog.logrocket.com/vue-firebase-authentication/ -->



Install Gridsome, a static site generator.

```
npm install --global @gridsome/cli
```

Create a folder called "website" to store your local website:  

```
gridsome create website https://github.com/u12206050/gridsome-firebase-starter.git
cd website
npm install
npm audit fix
```

Copy the .env.example file and rename to .env.development (Mac)
<!-- Note that there is already env.development without starting dot. -->

```
cp .env.example .env.development
```

Update the .env.development with your Firebase credentials.
Get from: Settings > General > Your Apps > CDN (radio button)
<!-- See docs /firebase/login -->

Start a local dev server at http://localhost:8080  
```
gridsome develop
```

BUG 1. - Error: Cannot find module './firebase-adminsdk-credentials.json'  
When running gridsome develop.  

Solution:  
Under Settings > [Service accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk) > Node.js > Generate new private key.  

Download private key into the root of the website directory and rename to './firebase-adminsdk-credentials.json'  

<!--
Set up Firebase AdminSDK service credentials

1. Navigate to the [settings/serviceaccounts/adminsdk](https://console.firebase.google.com/u/0/project/_/settings/serviceaccounts/adminsdk) of your firebase project.
2. Make sure `Firebase Admin SDK` is current title, and click `Generate new private key`
3. Download the key and save it to the root of your project with the name firebase-adminsdk-credentials.json
4. Optional: If you use a different file name, for the saftey of everyone, include this line in your .gitignore file: *-firebase-adminsdk-*.json and update gridsome.config.js with the new file name.  
-->

BUG 2. - TypeError: addCollection is not a function  
fixed by running "npm install" and "npm audit fix" above.  



BUG 3. - Unresolved, Dist folder is not generated.  

at Function.Module._load (internal/modules/cjs/loader.js:724:14)
(node:17810) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 4)  


<!--
Try skipping this (it's not part of the setup instructions and had no result.)
Install Firebase Admin SDK    https://firebase.google.com/docs/admin/setup
Might not be needed (didn't resolve: Cannot find module './firebase-adminsdk-credentials.json): 

```
npm install firebase-admin --save
```
-->

What command(s) to run to update?

```
npm outdated

Package                      Current  Wanted  Latest  Location
bundlesize                    0.17.2  0.17.2  0.18.0  website
gridsome                       0.6.8   0.6.9  0.7.10  website
gridsome-plugin-tailwindcss   2.2.19  2.2.27  2.2.27  website
gridsome-source-firestore      1.0.1   1.1.1   1.1.1  website
node-sass                     4.12.0  4.13.0  4.13.0  website
sass-loader                    7.3.1   7.3.1   8.0.0  website
style-resources-loader         1.2.1   1.3.2   1.3.2  website



{
  "name": "website",
  "private": true,
  "keywords": [
    "firestore",
    "gridsome",
    "gridsome-starter"
  ],
  "license": "MIT",
  "author": "Gerard Lamusse",
  "scripts": {
    "build": "gridsome build && bundlesize",
    "deploy": "gridsome build && mv dist ../public && firebase deploy --only hosting",
    "develop": "gridsome develop",
    "explore": "gridsome explore",
    "start": "gridsome develop",
    "test": "bundlesize"
  },
  "dependencies": {
    "gridsome": "^0.6.0",
    "gridsome-source-firestore": "^1.0.1",
    "vue-gtm": "^2.2.0",
    "vue-lazy-hydration": "^1.0.0-beta.9"
  },
  "devDependencies": {
    "bundlesize": "^0.17.2",
    "gridsome-plugin-tailwindcss": "^2.2.19",
    "node-sass": "^4.12.0",
    "sass-loader": "^7.3.1",
    "style-resources-loader": "^1.2.1"
  },
  "bundlesize": [
    {
      "path": "./dist/assets/js/component--*.js",
      "maxSize": "10 kB"
    },
    {
      "path": "./dist/assets/js/app.*.js",
      "maxSize": "80 kB"
    },
    {
      "path": "./dist/assets/js/page-query.*.js",
      "maxSize": "10 kB"
    }
  ]
}
```

Running "npm update" returns us to 3 outdated packages, but "addCollection is not a function" (bug 2) returns at /website/node_modules/gridsome-source-firestore/index.js:100:32

```
Package      Current  Wanted  Latest  Location
bundlesize    0.17.2  0.17.2  0.18.0  website
gridsome       0.6.9   0.6.9  0.7.10  website
sass-loader    7.3.1   7.3.1   8.0.0  website
```

------

npm install -g firebase-tools

<!--
Georgia Firestore IO 1


georgia-firestore-io-1
-->

```
firebase login
firebase init
firebase deploy
```

