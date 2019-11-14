# Vue  

<!-- https://modelearth.github.io/community/resources/vue/ -->

[Gridsome + Firebase: Starter for your next static yet dynamic site](https://medium.com/day4/gridsome-firebase-starter-for-your-next-static-yet-dynamic-site-a0676bb5b8ba)  

[Gridsome Firebase Starter - GitHub](https://github.com/u12206050/gridsome-firebase-starter)
<!-- Also potentially usefull https://blog.logrocket.com/vue-firebase-authentication/ -->

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

