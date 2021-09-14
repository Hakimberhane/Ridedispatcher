import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToRoutesList(){

     this.router.navigate(['/adminpage/routelist']);

  }

  public goToVehicleslist() { 

     this.router.navigate(['/driverlist']);


  } 
  public goToRouteRegistration() { 

     this.router.navigate(['/adminpage/routeregistration']);

  }
  public goToDriverRegistration() { 

     this.router.navigate(['/adminpage/driverregistration']);

  }




}
