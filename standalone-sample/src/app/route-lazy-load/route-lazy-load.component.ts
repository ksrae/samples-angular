import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'route-lazy-load',
  templateUrl: './route-lazy-load.component.html',
  styleUrls: ['./route-lazy-load.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class RouteLazyLoadComponent {
  searchForm: FormGroup;

  constructor(

  ) {
    this.searchForm = new FormGroup({
      item: new FormControl('', [Validators.required])
    });

    this.searchForm.valueChanges.subscribe(observer => {
      console.log(this.searchForm.valid);
    });
  }

  submit(e: any) {
    const { item } = this.searchForm.controls;
    console.log(item.value);
  }
}
