# Frank Kinsey - Main GitHub Pages Site

This repository was established to create a github pages static Profile site using React.

## Build Process

Initially built inside VScode, the profile site was built using React while attemopting to use raw HTML, CSS, and JavaScript with little/no use of libraries. It was then comitted to Github before adding a node package for hosting on GiHub Pages:

`npm install gh-pages --save-dev`

The script within the project package.json file was then updated to automate deployment:

```
"scripts":{
"predeploy" : "npm run build",
"deploy" : "gh-pages -d build"
}
```

A homepage is also added to the package.json file, this will be where the final page is hosted:

`http://<github-username>.github.io/<repo-name>`

The GitHub Pages version is compiled and deployed to github using the previously setup script:

`npm run deploy`

Then Github Pages is then configured to use the gh-pages branch for deployment.

The resulting site is at available at [my GitHub Pages profile site](https://talk2frank.github.io/githubpages/)

I hope you like it.


Frank