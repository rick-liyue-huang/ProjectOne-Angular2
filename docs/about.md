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

src/environments : config dev or production environment

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



```
import { Component } from '@angular/core';

//three necessary elements of component: decorator, template, controller

//decorator
@Component({
  selector: 'app-root', // selector - occupy flag
  templateUrl: './app.component.html', // template
  styleUrls: ['./app.component.css']
})

// controller
export class AppComponent {
  title = 'Rick Huang';
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


```
 import { BrowserModule } from '@angular/platform-browser';
 import { NgModule } from '@angular/core';
 import {FormsModule} from "@angular/forms";
 import {HttpModule} from "@angular/http";
 
 import { AppComponent } from './app.component';
 
 // decorator
 @NgModule({
   declarations: [ // only component, direcitve, pipe
     AppComponent
   ],
   imports: [  // dependent other modules
     BrowserModule,
     FormsModule,
     HttpModule
   ],
   providers: [], // Dependency Injection: service
   bootstrap: [AppComponent] // main component
 })
 
 export class AppModule { } // controller

```

run project: through 'angular-cli.json' firstly load 'main.ts', and then load all dependent modules,
get the 'AppModule', then the responsive 'AppComponent', put the 'AppComponent' in the 'index.htl' by 'selector'property in decorator


### Coding project

##### Import the dependencies and some types of typescript

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

##### Create the different components

run `npm i admin-lte --save` to install lib of 'adminLTE'.

run `npm i --save font-awesome` to install font style.

run `npm i --save ionicons` to run icon style.

run `npm i --save jquery` and `npm i --save bootstrap` to add js libs

find the source code of <body> tag from adminLTE template, and copy them to 'app.component.html' to produce the main page.

run `ng g component navbar` to create the component of 'src/app/navbar', as well as the 'footer', 'search', 'carousel', 'starts', 'product'

here, we will find the some components imported in the 'app.module.ts'.

At last, arrange the upon components to 'app.component.html' template file.

create the contents in upon different components.


##### Add router to this project

Create the new component for different routes.

Update 'app.module.ts', including

```const routeConfig: Routes = [
   {path: '', component: HomeComponent},
   {path: 'product/:productTitle', component:ProductDetailComponent}
 ];
```

and 
```
imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
  ],
```


at last, update the template file of 'product.component.html'

```
<h4><a [routerLink]="['/product', product.title]">{{product.title}}</a></h4>
```



##### DI: dependency injection （IOC: Inversion of Control ）

for example: 

```
var product = new Product();
var shipCompany = createshipment();
var address = new Address();
var order = new Order();
order.setAddress(address);
createshipment(product, shipCompany, order);
```

angular will use the following code to implement

Loose coupling

```
@NgModule({
  providers: [ProducService]
  // providers: [{provide: PrductService, useClass: ProductService}]
  // can use the different service
  // providers: [{provide: PrductService, useClass: AnotherProductService}]
  
  // providers: [{provide: ProductService, useFactory: () => {...}}]
})

export class AppModule {}

@component({})

export class ProductComponent {
  product: Product;
  constructor(productService: ProductService) {
    this.product = productService.getProduct();
  }
}
```


add three methods: `getProducts()`, `getProduct(id)`, `getCommentsForProduct(id)` in service file 'ProductService'.
 
and transfer the params 'ID' when routing.

at last inject 'ProductService'.

##### DataBind, Reactive programming and Pipe

add reactive programming coding,

```
constructor(private productService: ProductService) {
    this.titleFilter.valueChanges

      // avoid typing too much
      .debounceTime(500)
      .subscribe(
        value => this.keyword = value
      );
  }
```

run 
```
ng g pipe pipe/filter
```

to product the filter pipe.

















