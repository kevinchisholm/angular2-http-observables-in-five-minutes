import {Component} from '@angular/core';
import {PackageService} from './package.service';
import {Package} from './package';
import * as _ from 'lodash';

@Component({
  selector: 'packages',
  templateUrl: 'src/packages/packages.html',
  providers: [PackageService],
  styleUrls:  ['src/packages/packages.css']
})
export class PackagesComponent {
  destinations: Array<Package> = [];

  constructor(private packageService: PackageService) {   

  }

  public ngOnInit () {
    //subscribe to the packageData stream
    this
      .packageService
      .packageData
      .subscribe((packages: Array<Package>) => {

        //mimic a slow connection
        setTimeout(() => {
          //set packages
          this.destinations = packages;
          //sort the data
          this.sortByPrice();
        }, 1500);
      });

    //make the http request
    this.packageService.loadAllPackages();
  }

  refreshData() {
    //re-set the ui
    this.destinations.length = 0;

    //make the http request
    this.packageService.loadAllPackages();
  }

  sortByPrice () {
    this.destinations = _.sortBy(
      this.destinations, function(d: any) {
        return parseInt(d['price'].replace(',', ''), 10);
      }
    );
  }
}
