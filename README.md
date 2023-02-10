# Frank Kinsey - Main GitHub Pages Site

This repository was established to create a github pages static.

## Build Process

This project was set up initially in React then adding github pages dependency in node:

`npm install gh-pages --save-dev`

The scripts within the project package.json file was then updated to automate deployment:

```
"scripts":{}
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build"
}
```

A homepage is also added to the package.json file:
`http://<github-username>.github.io/<repo-name>`

The github pages version is compiled and deployed to github using:

`npm run deploy`

Then github pages is pointed towards the gh-pages branch for deployment

The resulting site is at [My GitHub Pages Site](https://talk2frank.github.io/githubpages/)