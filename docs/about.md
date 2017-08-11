### Create project:

install angular-cli: `npm i -g @angular/cli`

create project: `ng new ProjectOne-Angular2`


### Introduction the project tree:

e2e: end to end test files

src: the source coding here

editorconfig: webstorm editing config file

angular-cli.json: angular cli config file

karma.conf.js karma auto test config file

package.json project npm config file

protractor.conf.js protractor auto test config file

tslint.json 定义typescript coding rule check file

src/app: coding written here

src/assets: store the static source

src/environments : config dev or pro environment

src/index.html web page start here

src/main.ts: the whole project main entry typescript file, angular will start the project here

src/polyfills.ts: import the library to compatible with older browsers

src/style.css: app global style file

src/test.ts: auto test file

src/tsconfig.app.json: typescript compiler config file

src/tsconfig.spec.json: same


### Start project

app/ :
angular app need one module and component at least.

1.
'app.component.ts' is the 'component' : decorator @component({})
  selector: selector，used to confirm the component shown location
  templateUrl: template used to show what look like
  styleUrls: show the style of template
  
  title controller property:
  all methods and props and most logics all in the controllers



```import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

2.
'app.module.ts' is the 'module'

import: import the other dependent modules
@NgModule decorator
declaration: declare something，including component, directive, and pipe

imports： import the upon modules

providers: all service coding here

bootstrap: the main component declared here


```import { BrowserModule } from '@angular/platform-browser';
   import { NgModule } from '@angular/core';
   
   import { AppComponent } from './app.component';
   
   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }

```

run project: through 'angular-cli.json' firstly load 'main.ts', and then load all dependent modules,
get the 'AppModule', then the responsive 'AppComponent', put the 'AppComponent' in the 'index.htl' by 'selector'property in decorator


### Coding project

run `npm i --save jquery bootstrap` to install jquery and bootstrap libray, and then insert the address in 'angular-cli.json'

```"styles": [
           "styles.css",
           "../node_modules/bootstrap/dist/css/bootstrap.css"
         ],
         "scripts": [
           "../node_modules/jquery/dist/jquery.js",
           "../node_modules/bootstrap/dist/js/bootstrap.js"
         ],
```

run `npm i --save-dev @types/jquery @types/bootstrap` to install the types file, which let typescript to recognize jquery and bootstrap.

run 'ng g component navbar' to create the component of 'src/app/navbar', as well as the 'footer', 'search', 'carousel', 'starts', 'product'

here, we will find the some components imported in the 'app.module.ts'































