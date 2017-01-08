# vue-collier

Created by Collier Devlin

### Why it was made...
This package was made to provide an easy-to-use, mobile css framework based off Skeleton CSS with the amazing flexibility and performance of Vue JS. Developers can often experience trouble with how long webpack takes to bundle a large framework such as Bootstrap and all the configuration that comes along with it, so vue-collier provides a much lighter alternative when quickly crafting your next idea.

For documentation and demos, please visit http://collierdevlinmedia.com/vue-collier/

### Features
- SCSS Templating based off Skeleton CSS (not complete)

### Additional Plugin Included
- Font-Awesome
- Chart JS (through vue-chartjs wrapper)

### Getting Started
To begin using vue-collier, simply install it using
`npm install --save vue-collier`

### Configuration - Vue JS
Assuming you are using Webpack to bundle all of your assets, we will begin by importing the vue-collier plugin which will make all vue components available to you in your vue instance.
```js
// after Vue import
import VueCollier from 'vue-collier'
Vue.use(VueCollier)
```

### Configuration - SASS
The recommended way to load `.scss` files with Webpack is by using `sass-loader`. Once you have configured `sass-loader` to include a basic `*.scss` file for your app, all you have to do is import the main vue-collier sass file.
```sass
@import "~vue-collier/scss/collier.scss";
```
Based off the `sass-loader` documentation, you will see that the `~` in the import will assume that your specified path is in the `node_modules` folder. Then include the path to the `collier.scss` and now you should have all the proper styles configured.

### Finishing up your configuration...
All that's left is to check to make sure your configuration was setup correctly. So compile webpack however your environment requires, go to the browser, and you should see that the default styles for vue-collier have been applied to your app.

