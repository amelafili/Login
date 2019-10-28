import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  nameForm: FormGroup;
  names = ['Name:', 'Canada', 'Uk'];
constructor(private fb: FormBuilder) {}
ngOnInit() {
 this.nameForm = this.fb.group({
   countryControl: ['Canada']
 });

}
}