import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Resource } from '../../providers/resource';

@Component({
  selector: 'page-create',
  templateUrl: 'create.html'
})
export class CreatePage {
  patient: {name?: string} = {};

  constructor(public navCtrl: NavController, public resource: Resource) {
  }

  create(form) {
    if (form.valid) {
      this.resource.create('patients', form.value).subscribe(data => {
        this.patient = {};
      });
    }
  }
}
