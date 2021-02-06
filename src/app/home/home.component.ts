import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  makes: any[] = ['Audi'];
  models: any[] = ['A3', 'A4', 'A5'];

  constructor(private fb: FormBuilder) { }

  searchForm = this.fb.group({
    brand: [''],
    model: [''],
    productionYearFrom: [''],
    productionYearTo: [''],
    engineType: [''],
    enginePowerFrom: [''],
    enginePowerTo: [''],
  });

  ngOnInit(): void { }
}
