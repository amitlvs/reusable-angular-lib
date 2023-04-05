# NpmAngularLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## DOCS STEPS : To create an angular-lib

Step 1 : Create an Angular Project
Step 2 : Run ng new npm-angular-lib to create lib folder
Step 3 : Run ng-build <lib-name>/ ng build <lib-name> --watch to build the library.
Step 4 : Import <lib-name-module> in the module.ts file of angular app.
Step 5 : Check tsconfig.json compilerOptions should have path of dist folder.
            "compilerOptions": {
                "paths": {
                "at-custom-lib": [
                    "dist/at-custom-lib"
                ]
                } 
Step 6 : Check angular.json file have the correct paths.
"at-custom-lib": {
      "projectType": "library",
      "root": "projects/at-custom-lib",
      "sourceRoot": "projects/at-custom-lib/src",
      "prefix": "lib",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:ng-packagr",
          "options": {
            "project": "projects/at-custom-lib/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "projects/at-custom-lib/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/at-custom-lib/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "tsConfig": "projects/at-custom-lib/tsconfig.spec.json",
            "polyfills": [
              "zone.js",
              "zone.js/testing"
            ]
          }
        }
      }
    }  
Step 7 : Above steps will work fine for same application/workspace or monolith app created in that application. For aniother workspace we have to add one line of path for specifying angular.
Step 8 : Add the below code in tsconfig.json file
"compilerOptions": {
                "paths": {
                "at-custom-lib": [
                    "dist/at-custom-lib"
                ]
                }                   
