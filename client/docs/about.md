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

the whole project builds on library of 'admin-lte'.

run `npm i admin-lte --save` to install lib of 'adminLTE'.

run `npm i --save font-awesome` to install font style.

run `npm i --save ionicons` to run icon style.

run `npm i --save jquery` and `npm i --save bootstrap` to add js libs

find the source code of <body> tag from adminLTE template, and copy them to 'app.component.html' to produce the main page.

run `ng g component header` to create the component of 'src/app/header', as well as the 'footer', 'sidebar', 'content', 

here, we will find the some components imported in the 'app.module.ts'.

At last, arrange the upon components to 'app.component.html' template file.

create the contents in upon different components.


##### Add router to this project

Create the new component for different routes.

Update 'app.module.ts', including

```
const routeConfig: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'stock', component: StockManageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'stock/:id', component: StockFormComponent}
];
```

and update 
```
imports: [  // dependent other modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routeConfig)
  ],
```


and then, update the template file of 'menu.component.html'

```
<li *ngFor="let menu of menus" [class.active]="currentMenuId == menu.id" >
        <a href="javascript:;" (click)="nav(menu)">
          <i class="fa fa-link"></i>
          <span>{{menu.name}}</span>
        </a>
      </li>
```
get the data from 'menu.component.html'.

One more bat very important thing is about the the router method to get the router.event

```
constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/dashboard') {
          this.pageTitle = 'HomePage';
          this.pageDesc = 'This is homepage';
        } else if(event.url == '/stock') {
          this.pageTitle = 'Stock Management';
          this.pageDesc = 'Deal with this stock';
        }
      });
  }

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


add two methods: `getstocks()`, `getstock(id)`, and list of 'stocks' in service file 'stock/stock.component.ts' service file.
 
and transfer the params 'ID' when routing.

at last inject 'StockService'.

the components of 'stock-form.component.ts' and 'stock-manage.component.ts' will inject the upon service. 


##### DataBind, Reactive programming and Pipe

Add reactive programming coding in 'stock-manage.component.ts',

```
this.nameFilter.valueChanges
      .debounceTime(500)
      .subscribe(value => this.keywork = value);

```
type 
```
<input [formControl]="nameFilter"  type="text" name="table_search" class="form-control pull-right" placeholder="Stock Name">
```
to add rxjs to input.

run 
```
ng g pipe stock/stockFilter
```

to product the filter pipe.

at last, type

```
<tr *ngFor="let stock of stocks | stockFilter: 'name' : keywork; let i = index;">
```

to let filter works.

##### Communication between components and Hooks

add @Input() and @Output() in stars.component.ts. 

bring the @Output property 'ratingChange' to the 'stock-form.component.ts'. 

add '[(rating)]' to complete the bidirectional-bind. 

put some repeated coding in ngOnChange() {} hook

```
ngOnChanges(changes: SimpleChanges) {
    this.stars = [];

    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }
```

Notice:

1.the parent component and child component should avoid to couple directly, they should use @Output and @Input
2.the component can emit some self-defined event by @Output, and these event can bring any its data.
3.can use the intermediate component to connect some non-parent-child components
4.the parent component can projection some template fragment to its child component by <ng-content>
5.each angular component has has one group of hooks.
6.angular has ngDoCheck() hook which is very frequent called, so care it.
7.we can mark some branch in the component tree to exclude the ngDoCheck.
 

##### Update the form by Reactived Form

Firstly, add the 'formModel: FormGroup' to construct the form data in 'stock-form.component.ts',
and then, bind these model to the form in 'stock-form.component.html',
here I also create the self-defined validator to deal with 'categories:FormArray' input.
more details alreay put during the codes by comments in 'stock-form.component.ts' and 'stock-form.component.html'.
























































