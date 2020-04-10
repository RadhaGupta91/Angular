import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators } from '@angular/forms';

import {Ingredients} from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  name: string;
  amount:number;
  id:any;

  ingredients:Ingredients[] = [
    new Ingredients(1,"Apple",100),
    new Ingredients(2,"Grapes",400),
    new Ingredients(3,"Tomatoes",330)
  ];

  constructor(private formBuilder: FormBuilder) { }

  addData(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

    var data = this.registerForm.value;
    if(data.id)
    {
      var removeIndex = this.ingredients.map(function(item) { return item.id; }).indexOf(data.id);
      this.ingredients[removeIndex]["name"] = data.name;
      this.ingredients[removeIndex]["amount"] = data.amount;
      
    }else{
      var newContact = new Ingredients(Math.floor(Math.random() * 123134),data.name,data.amount);
      this.ingredients.push(newContact);

    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
  
  editContact(id:any){
    var editId = this.ingredients.map(function(item) { return item.id; }).indexOf(id);
    var item = this.ingredients[editId];
    this.registerForm.patchValue({
      id: item["id"],
      name: item["name"],
      amount: item["amount"],
    })
    // this.registerForm.value.id = item["id"];    
    // this.registerForm.value.name = item["name"];    
    // this.registerForm.value.amount = item["amount"];
  }

  deleteContact(id:any)
  {
      var removeIndex = this.ingredients.map(function(item) { return item.id; }).indexOf(id);
      // remove object
      this.ingredients.splice(removeIndex, 1);
      this.ngOnInit();
  }

  ngOnInit(): any {
      this.registerForm = this.formBuilder.group({
          id: ['', Validators.nullValidator],
          name: ['', Validators.required],
          amount: ['', Validators.required]
      });
  }

  get f() { return this.registerForm.controls; }

}
