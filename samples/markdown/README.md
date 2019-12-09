# Create a page

Steps for creating a static site using Markdown and GitHub Pages with free hosting.  

1. Install [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en) to view and develop pages offline using localhost on your computer. (Note the folder indicated as your local site root.)

 If you are using the Brave Browser, set a folder for your localhost](https://medium.com/@jmatix/using-chrome-as-a-local-web-server-af04baffd581). Chrome may need to remain open for Brave to access localhost via Web Server for Chrome. 

 This above may fail, in which case launch a Python server.  
 Change to your custom path after -d, or launch in your web folder.  

 <code>python3 -m http.server 8887 -d /Users/East/Data</code>

<!-- If running python cgi
python3 -m http.server --cgi
-->

2. Clone the "<a href='https://github.com/modelearth/community'>community</a>" repo to your local computer.  (Fork if you plan to collaborate on updates.)

3. When cloning the repo, place the "community" folder inside the folder where "Web Server for Chrome" points.  

4. Open the folder at [http://localhost:8887/community/](http://localhost:8887/community/)  

5. Edit the main README.md page to customize your intro.  

<br>

### Additional Resources

Examples of editing using markdown language [Markdown to HTML (Dillinger)](https://dillinger.io/)  

The process of creating fast sites using static pages with APIs is referred to as [JAM Stack Development](https://jamstack.org)  

Advanced: Pre-process with [Gatsby](https://www.gatsbyjs.org/) which delivers static content enfused with React. 
 