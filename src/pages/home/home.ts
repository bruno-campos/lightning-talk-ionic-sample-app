import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Resource } from '../../providers/resource';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public resource: Resource) {

  }

  ionViewDidEnter() {
    
  }

}
