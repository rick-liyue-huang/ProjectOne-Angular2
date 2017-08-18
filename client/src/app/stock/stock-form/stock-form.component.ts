import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {


  // here will deal with the form in reactived form

  // declare the whole form
  formModel: FormGroup;

  stock: Stock = new Stock(0, "", 0, 0, "", []);

  categories = ["IT", "Elec", "Finance"]; // used to produce three checkboxes and ngFor them

//


  constructor(private routeInfo: ActivatedRoute, private stockService: StockService, private router: Router) {}

  ngOnInit() {

    let stockId = this.routeInfo.snapshot.params["id"];


    //  create the form data constructure
    let fb = new FormBuilder();

    // fb.group means the whole form
    this.formModel = fb.group(

      {
        //define the initial name, and validators required and minlength, and bind to html by formControlName="name"
        name: ['', [Validators.required, Validators.minLength(3)]],
        price: ['', Validators.required],
        desc: [''],

        // match with stock.service.ts, categories: Array<string>)
        categories: fb.array([  // using fb.array to build the array data structure
          new FormControl(false), // used to confirm whether the selected stock has the dedicated category
          new FormControl(false),
          new FormControl(false)
          //  the return is boolean value, if true, will checked.
        ], this.categoriesSelectValidator)
      }
    );


    // this.stock = this.stockService.getStock(stockId);

  //  here need to update code to get the data from server.ts
    this.stockService.getStock(stockId).subscribe(
        data => {
          this.stock = data;

          this.formModel.reset({
            name: data.name,
            price: data.price,
            desc: data.desc,

            categories: [
              data.categories.indexOf(this.categories[0]) != -1,
              data.categories.indexOf(this.categories[1]) != -1,
              data.categories.indexOf(this.categories[2]) != -1
            ]
          });


        }  // this is the async callback, so maybe can not get the data right now



    );

    /*

  //  create the form data constructure
    let fb = new FormBuilder();

    // fb.group means the whole form
    this.formModel = fb.group(

      {
        //define the initial name, and validators required and minlength, and bind to html by formControlName="name"
        name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
        price: [this.stock.price, Validators.required],
        desc: [this.stock.desc],

        // match with stock.service.ts, categories: Array<string>)
        categories: fb.array([  // using fb.array to build the array data structure
          new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1), // used to confirm whether the selected stock has the dedicated category
          new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
          new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
        //  the return is boolean value, if true, will checked.
        ], this.categoriesSelectValidator)
      }
    );

  */
  }

  // define one validator to confirm whether none checkbox is checked
  categoriesSelectValidator(control: FormArray) {

    var valid = false;

    control.controls.forEach(control => {

      if (control.value) {
        valid = true;
      }
    });

    if (valid) {
      return null;
    } else {
      return {categoriesLength: true};
    }

  }

  cancel() {
    this.router.navigateByUrl('/stock');
  }

  save() {
    console.log(this.stock.rating);

    // assign the 'stock.rating' value from 'stock.service.ts' to this.formModel.value.rating,
    this.formModel.value.rating = this.stock.rating;

    // transfer the boolean array to string array, because the stock info categroy is string type array
    var index = 0, stringCategories = [];
    for (var i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        stringCategories[index++] = this.categories[i]
      }
    }

    this.formModel.value.categories = stringCategories;

    // check the form name input value
    console.log(this.formModel.value);

    // this.router.navigateByUrl('/stock');
  }

}
































































