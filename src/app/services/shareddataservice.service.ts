import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareddataserviceService {


  private routeData = {};

  constructor() { }

  getRouteData(){

  	return this.routeData;
  }

  updateRouteData(routeData) {

  	this.routeData = routeData;
  }


}
