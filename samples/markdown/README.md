# Getting Started

Steps for creating a static site using Markdown and GitHub Pages with free hosting.  

1. View pages on localhost by running in your web root:  

 <code>python -m http.server 8887</code>

 Or specify a path (change /Sites to your custom path):

 <code>python3 -m http.server 8887 -d /Sites</code>

 Alternatively, you can install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) to view and develop pages offline using https://localhost:8777 on your computer. Web Server for Chrome also allows you to [load a custom domain](https://medium.com/@jmatix/using-chrome-as-a-local-web-server-af04baffd581). Web Server for Chrome does not work as a Brave browser extension on Mac (as of December 2019), but you can add as a Chrome extension, then utilize from within Brave.

1. Clone the "<a href='https://github.com/modelearth/community'>community</a>" repo to your local computer.  (Fork if you plan to collaborate on updates.)  
<a href="https://desktop.github.com/">GitHub Desktop</a> is an easy way to deploy your changes.

1. Place the "community" folder inside the folder where your local web server points.  

1. Open the folder at [http://localhost:8887/community/](http://localhost:8887/community/)  

1. Update pages - Edit text in the README.md files which are pulled into index.html pages.  

1. [Set up crowdsourced editing](../../editor) of data for lists and maps.
<!--
1. Copy the "starter" folder inside community and give it the name of your community or module.
-->
<br>

### Mac Users
You'll want to avoid commiting your local .DS_Store files to GitHub. Run the following to have GitHub ignore .DS_Store files forever. The .DS_Store files will continue to set icon sizes in your local file manager.   
 
<!-- Avoid .DS_Store file creation over network connections (article from 2011, confirm this still occurs)
	https://support.apple.com/en-us/HT1629 -->
<code>git config --global core.excludesfile ~/.gitignore  
echo .DS_Store >> ~/.gitignore</code>  

You can toggle seeing hidden files using Command+Shift+Dot. 

### Additional Resources

Examples of editing using markdown language [Markdown to HTML (Dillinger)](https://dillinger.io/)  

The process of creating fast sites using static pages with APIs is referred to as [JAM Stack Development](https://jamstack.org)  

Advanced: Pre-process with [Gatsby](https://www.gatsbyjs.org/) which delivers static content enfused with React. 
 