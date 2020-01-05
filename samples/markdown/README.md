# Create a page

Steps for creating a static site using Markdown and GitHub Pages with free hosting.  

1. View pages on localhost by running in your web root:  

 <code>python -m http.server</code>

 Or specify a path (change to your custom path):

 <code>python3 -m http.server 8887 -d /Sites</code>

 Alternatively, you can install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) to view and develop pages offline using https://localhost:8777 on your computer. Web Server for Chrome also allows you to [load a custom domain](https://medium.com/@jmatix/using-chrome-as-a-local-web-server-af04baffd581). (Web Server for Chrome does not work as a Brave browser extension on Mac (as of December 2019), but you can add as a Chrome extension, then utilize from within Brave.)

2. Clone the "<a href='https://github.com/modelearth/community'>community</a>" repo to your local computer.  (Fork if you plan to collaborate on updates.)

3. When cloning the repo, place the "community" folder inside the folder where "Web Server for Chrome" points.  

4. Open the folder at [http://localhost:8887/community/](http://localhost:8887/community/)  

5. Edit the main README.md page to customize your intro.  

<br>

### Mac Users
Ignore .DS_Store forever (these pesky files are used to set icon sizes in your local file manager)  
You can toggle seeing hidden files using Command+Shift+Dot.  
<!-- Avoid .DS_Store file creation over network connections (article from 2011, confirm this still occurs)
	https://support.apple.com/en-us/HT1629 -->
<code>git config --global core.excludesfile ~/.gitignore  
echo .DS_Store >> ~/.gitignore</code>  

### Additional Resources

Examples of editing using markdown language [Markdown to HTML (Dillinger)](https://dillinger.io/)  

The process of creating fast sites using static pages with APIs is referred to as [JAM Stack Development](https://jamstack.org)  

Advanced: Pre-process with [Gatsby](https://www.gatsbyjs.org/) which delivers static content enfused with React. 
 