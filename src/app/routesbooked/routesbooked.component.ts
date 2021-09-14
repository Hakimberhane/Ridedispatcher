import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-routesbooked',
  templateUrl: './routesbooked.component.html',
  styleUrls: ['./routesbooked.component.css']
})
export class RoutesbookedComponent implements OnInit {

  pickedTime:string;
  pickedRoute:string;
  pickedTimeDate:string;
  departure:string;
  destination:string;
   
  routeData:any;
  morninghoursArray = [];
  afternoonghoursArray = [];
  buttonClicked: string = "";


constructor(private route: ActivatedRoute,private router: Router) {

	 this.route.queryParams.subscribe(params => {
	     this.routeData = JSON.parse(params["data"]);
	     console.log("route dat is no");
       //   console.log(this.routeData.mondayHrs.myarraylist);   
       console.log(this.routeData); 
       this.pickedRoute = "Route " + this.routeData.routeId + '-' + this.routeData.subrouteno;
       this.departure = this.routeData.departure;
       this.destination = this.routeData.destination;

	  });

  }

  ngOnInit(): void {
  }


showbookingtable(item) {

   this.pickedTime = item;
 	
 }

 showTimeAndBookingTable(day) {

    this.buttonClicked = day;

    if(day == 'Mon'){
    	this.pickedTime = " ";
    	this.hoursArray = this.routeData.mondayHrs.myarraylist;
    	if(this.hoursArray){
    		this.organizeHours(this.hoursArray);
    		this.pickedTimeDate = this.routeData.mondayHrs.scheduleDate;
    	}else {
    	  this.morninghoursArray = [];
          this.afternoonghoursArray = [];
    	}
    }
    if(day == 'Tue'){
    	this.pickedTime = " ";

    	this.hoursArray = this.routeData.tuesdayHrs.myarraylist;
    	if(this.hoursArray){
    		this.organizeHours(this.hoursArray);
    		this.pickedTimeDate = this.routeData.tuesdayHrs.scheduleDate;

    	}else {
    	  this.morninghoursArray = [];
          this.afternoonghoursArray = [];
    	}

    }
    if(day == 'Wed'){
    	this.pickedTime = " ";

    	this.hoursArray = this.routeData.wednesdayHrs.myarraylist;
    	if(this.hoursArray){
    		this.organizeHours(this.hoursArray);
    		this.pickedTimeDate = this.routeData.wednesdayHrs.scheduleDate;

    	}else {
    	  this.morninghoursArray = [];
          this.afternoonghoursArray = [];
    	}

    }
    if(day == 'Thu'){
    	this.pickedTime = " ";

  	    this.hoursArray = this.routeData.thursdayHrs.myarraylist;
    	if(this.hoursArray){
    		this.organizeHours(this.hoursArray);
    		this.pickedTimeDate = this.routeData.thursdayHrs.scheduleDate;
    	}else {
    	  this.morninghoursArray = [];
          this.afternoonghoursArray = [];
    	}
    }
    if(day == 'Fri'){
        this.pickedTime = " ";

  	    this.hoursArray = this.routeData.fridayHrs.myarraylist;
    	if(this.hoursArray){
    		this.organizeHours(this.hoursArray);
    		this.pickedTimeDate = this.routeData.fridayHrs.scheduleDate;

    	}else {
    	  this.morninghoursArray = [];
          this.afternoonghoursArray = [];
    	}
    }
    if(day == 'Sat'){
    	this.pickedTime = " ";

        this.hoursArray = this.routeData.satdayHrs.myarraylist;
    	if(this.hoursArray){
    		this.organizeHours(this.hoursArray);
    		this.pickedTimeDate = this.routeData.satdayHrs.scheduleDate;

    	}else {
    	  this.morninghoursArray = [];
          this.afternoonghoursArray = [];
    	}

    }
    

 }

 organizeHours(hourArray) {


    this.morninghoursArray = [];
	this.afternoonghoursArray = [];

	hourArray.forEach( (element) => {
	 	var stringArray = element.split(' ');
	 	var amOrpm  = stringArray[1];
	 	
	 	console.log("amOrpm");
	 	console.log(amOrpm);

	 	if(amOrpm == "AM") {
	 	  this.morninghoursArray.push(element);	
	 	  console.log(this.morninghoursArray);

	 	} else {
	 	   this.afternoonghoursArray.push(element);
	 	   console.log(this.afternoonghoursArray);

	 	}
	});

	console.log("bet");
	console.log(this.morninghoursArray);
	console.log(this.afternoonghoursArray);
	this.afternoonghoursArray.forEach((element) => {
       console.log(element);

	});

 }

  goToBookingPage(item){


   let navigationExtras: NavigationExtras = {
    queryParams: {
        "data": JSON.stringify(item)
    }
  };

  this.router.navigate(['/routesbooked'],  navigationExtras);
  	
  	console.log("booked");
  	console.log(item);
     //   this.router.navigate(['/adminpage/routesbooked']);
      //  this.shareddataserviceService.updateRouteData(item);
  	   //  this.router.navigate(['/adminpage/routesbooked'],{ queryParams: { item: item } });

  }


 
 


}









