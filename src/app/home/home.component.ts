import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  searchForm = this.fb.group({
    brand: [''],
    model: [''],
    productionYearFrom: [''],
    productionYearTo: [''],
    engineType: [''],
    enginePowerFrom: [''],
    enginePowerTo: [''],
  });

  ngOnInit(): void {}
}
