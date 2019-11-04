# Gatsby Newsroom

Implementation notes.<!-- Michael https://github.com/mdb1710 -->

## Initial Setup

[Quick Start](https://www.gatsbyjs.org/docs/quick-start/#create-a-new-site)  

> npm install -g gatsby-cli  
> gatsby new caribbean  

Choose yarn or npm. After the install, yarn suggested running: brew upgrade yarn  

> cd caribbean  

## Subsequent Setup

The folders node_modules and public are NOT checked into our GitHub repo thanks to the default .gitignore settings.  

To generate the node_modules folder locally during subsequent installs, run either:  

> yarn install

or 

> npm install  

or simply

> npm i

If you don't see the regenerate node_modules folder, make sure your command window is hitting the correct caribbean folder.  Renaming the folder on a Mac takes the prompt with it.

To regenerate the "public" folder, run:

> gatsby build


# More About Gatsby

Newsroom data visualization: "The consolidated query system, which is very important for journalistic work where data can come from many sources, such as Google Sheets, is used to keep track of small bits of text or translations, massive databases, CSV files, and practically anything else you can think of, and the speed of the built sites." - [David Eads](https://www.gatsbyjs.org/blog/2019-03-29-interview-with-david-eads/)