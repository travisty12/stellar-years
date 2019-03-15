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
| **Program calculates the user's expected remaining lifespan on every planet** | 11-26-1996 | 57.701 Earth years remaining, 240.42 Mercury years remaining, etc. |
| **Program congratulates the user on living past their expected lifespan** | 11-26-1939 | 0.299 Earth years past expected! |
| **Program allows user to input their own birthday** | 11-26-1996 | *everything above* |
| **Program validates user input** | 13-26-1996 | Please enter a valid birthdate |
| **Program tells user when their next birthday will be, on every planet** | 11-26-1996 | Your next birthday on Earth will be on 11/26/2019! Your next birthday on Mercury will be on... |



1. UX/UI
* Include and modify html/Sass once specs are completed for .js files

1. Polish
* Add additional specs, i.e. how many Mayfly lives a human has lived, or how old the sun is comparatively, or the age of Keith Richards in dog years on Mercury, etc

## Technologies Used

* _Node Package Manager_

* _Sass_

* _jQuery_

* _All of the dependencies listed in the planning section_

### Known Bugs

* _When a birthdate is older than a certain year, the program starts to round - showing the 'next birthday' to be the day before their actual birthday._
  * i.e. 2000-12-31 as the initial date returns the correct birthday, but 1950-12-31 as the initial date returns 'Mon Dec 30 2019' as the next birthday.

* _The test spec file only compares the sample desired outputs to **what was the current time**, so the values begin to veer off, and the tests now fail. I'm not sure if there is a better practice when creating tests for functions based on Date.now() that will prevent this._

* _I put a gif in as an html element, and it showed up for a while, but on my most recent build it suddenly pulled a 404. Don't care enough to worry about it, this happens all the time and it's not worth the migraine._

### Support and Contact Details

[Email me for any questions](mailto:travisty12@gmail.com)

[View my work](https://www.github.com/travisty12/)

#### License
* _This software is licensed under the MIT license_

Copyright (c) 2019 **Travis Toal**
