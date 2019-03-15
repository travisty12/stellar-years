# Stellar Years
> _A project to calculate the user's age in other planets' year equivalents_

#### By **Travis Toal**

### Installation / Usage
* _Clone this repository to your machine, and run 'npm install' to download the dependencies._
* _Run 'npm run start' to build the project on a local server, or run 'npm test' to run tests on the project through Karma / Jasmine._

### Description

## Planning

1. Dependencies
  * babel-core, loader, and preset-es2015: compiles JS for different browsers
  * clean-webpack-plugin: clears dist folder
  * css-loader, style-loader, sass-loader, node-sass: dependencies for styles
  * eslint, eslint-loader: linter for JS
  * file-loader: loads images
  * html-webpack-plugin: dependency for loading html file
  * jasmine, jasmine-core, karma, karma-chrome-launcher, karma-cli, karma-jasmine, karma-jasmine-html-reporter, karma-jquery, karma-sourcemap-loader, karma-webpack: testing dependencies
  * uglifyjs-webpack-plugin: minifying dependency
  * webpack, webpack-cli, webpack-dev-server: bundling dependencies

1. Configuration
  * Set up project as npm/webpack-bundled, spec/test-driven, logic-separated directory

1. Specs

  | Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Program calculates the user's current Earth age based on an entered birthdate** | 11-26-1996 | 22.299 Earth years old |
| **Program converts the user's Earth age to their age in Mercury years** | 11-26-1996 | 92.911 Mercury years old |
| **Program converts the user's Earth age to their age in Venus years** | 11-26-1996 | 35.966 Venus years old |
| **Program converts the user's Earth age to their age in Mars years** | 11-26-1996 | 11.861 Mars years old |
| **Program converts the user's Earth age to their age in Jupiter years** | 11-26-1996 | 1.8802 Jupiter years old |
| **Program calculates the user's expected remaining lifespan** | 11-26-1996 | 57.701 Earth years remaining |
| **Program congratulates the user on living past their expected lifespan** | 11-26-1939 | 0.299 Earth years past expected! |
| **Program allows user to input their own birthday** | 11-26-1996 | *everything above* |
| **Program validates user input** | 13-26-1996 | Please enter a valid birthdate |


1. UX/UI
* Include and modify html/Sass once specs are completed for .js files

1. Polish
* Add additional specs, i.e. how many Mayfly lives a human has lived, or how old the sun is comparatively, or the age of Keith Richards in dog years on Mercury, etc

## Technologies Used

* _Node Package Manager_

* _Sass_

* _jQuery_

### Known Bugs


#### General Issues


### Support and Contact Details


#### License
* _This software is licensed under the MIT license_

Copyright (c) 2019 **Travis Toal**
