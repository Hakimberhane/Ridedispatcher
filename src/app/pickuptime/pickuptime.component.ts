import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ShareddataserviceService } from '../services/shareddataservice.service';
import { RouteservicesService } from '../services/routeservices.service';


@Component({
  selector: 'app-pickuptime',
  templateUrl: './pickuptime.component.html',
  styleUrls: ['./pickuptime.component.css']
})
export class PickuptimeComponent implements OnInit {

    mondayHours = {};
    tuesdayHours = {};
    wednesdayHours = {};
    thursdayHours = {};
    fridayHours = {};
    saturdayHours = {};

    daysoftheweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    datesoftheweek = [];
    dayswithdate = [];


    bgColor:string = "#008000";
    private routeData = {};
    driverId:any; 


   constructor(private route: ActivatedRoute,private router: Router,private shareddataserviceService:ShareddataserviceService ,
   private routeservicesService:RouteservicesService) {

			//var d = new Date(dateToParse);
		//var d = Date.parse(dateToParse);
        //  var d = new Date("2021-04-28");

	    var date = new Date();
	    var n = date.getDay();
	    this.daysoftheweek = this.daysoftheweek.slice(n, 7);

       var scheduleDate = new Date();
       var days = 0;
       this.daysoftheweek.forEach((value)=> {
           scheduleDate.setDate(scheduleDate.getDate() + days);
           var dObj = {};
		   dObj.day = value;
		   var dateStr = scheduleDate.toDateString();
           dateStr = dateStr.split(' ').slice(1,4);
		   dObj.date = dateStr;
		   days = days + 1;
	       this.dayswithdate.push(dObj);

		})

  		this.route.queryParams.subscribe(params => {
  			  this.driverId = params['id'] || 0;		
  		});
  		this.routeData = this.shareddataserviceService.getRouteData();
  		console.log("dd");
  		console.log(this.routeData);

   }

  ngOnInit(): void {

  }

  addTime(element,departureTime,data){

        var scheduleDate =  `${data.date[0]}/${data.date[1]}/${data.date[2]}`;
        var dayOfTheWeek = data.day;
 
	    if(dayOfTheWeek == "Monday") {

	    	 if(Object.keys(this.mondayHours).length==0){

		            this.mondayHours = {            
					   myarraylist: []
					};
		            this.mondayHours.scheduleDate = scheduleDate;
		      };

			  if(element.style.background == 'rgb(240, 240, 240)'){

				  	element.style.background = '#17a2b8e6';
				  	this.mondayHours.myarraylist.push(departureTime);
				  	console.log("Added");
		            console.log(this.mondayHours);

		     } else {
				  	element.style.background = 'rgb(240, 240, 240)';
				  	this.removeTime(this.mondayHours.myarraylist,departureTime);
				  	console.log("removed");
				  	console.log(this.mondayHours);
		     }
	    }
	    if(dayOfTheWeek == "Tuesday") {

	    	 if(Object.keys(this.tuesdayHours).length==0){

		            this.tuesdayHours = {            
					   myarraylist: []
					};
		            this.tuesdayHours.scheduleDate = scheduleDate;
		      };

			  if(element.style.background == 'rgb(240, 240, 240)'){

				  	element.style.background = '#17a2b8e6';
				  	this.tuesdayHours.myarraylist.push(departureTime);
				  	console.log("Added");
		            console.log(this.tuesdayHours);

		     } else {
				  	element.style.background = 'rgb(240, 240, 240)';
				  	this.removeTime(this.tuesdayHours.myarraylist,departureTime);
				  	console.log("removed");
				  	console.log(this.tuesdayHours);
		     }
	    }
	    if(dayOfTheWeek == "Wednesday") {

	    	 if(Object.keys(this.wednesdayHours).length==0){

		            this.wednesdayHours = {            
					   myarraylist: []
					};
		            this.wednesdayHours.scheduleDate = scheduleDate;
		      };

			  if(element.style.background == 'rgb(240, 240, 240)'){

				  	element.style.background = '#17a2b8e6';
				  	this.wednesdayHours.myarraylist.push(departureTime);
				  	console.log("Added");
		            console.log(this.wednesdayHours);

		     } else {
				  	element.style.background = 'rgb(240, 240, 240)';
				  	this.removeTime(this.wednesdayHours.myarraylist,departureTime);
				  	console.log("removed");
				  	console.log(this.wednesdayHours);
		     }
	    }
	    if(dayOfTheWeek == "Thursday") {


	    	 if(Object.keys(this.thursdayHours).length==0){

		            this.thursdayHours = {            
					   myarraylist: []
					};
		            this.thursdayHours.scheduleDate = scheduleDate;
		      };

			  if(element.style.background == 'rgb(240, 240, 240)'){

	    	 	     alert("thursday");

				  	element.style.background = '#17a2b8e6';	  			     	    	 	  
				  	this.thursdayHours.myarraylist.push(departureTime);

		            console.log(this.thursdayHours);
		            console.log("thursda");
		            console.log(this.thursdayHours.myarraylist);

		     } else {
				  	element.style.background = 'rgb(240, 240, 240)';
				  	this.removeTime(this.thursdayHours.myarraylist,departureTime);
				  	console.log("removed");
				  	console.log(this.thursdayHours);
		     }
		     console.log("thursda");
		     console.log(this.thursdayHours.myarraylist);
	    }
	    if(dayOfTheWeek == "Friday") {

	    	 if(Object.keys(this.fridayHours).length==0){

		            this.fridayHours = {            
					   myarraylist: []
					};
		            this.fridayHours.scheduleDate = scheduleDate;
		      };

			  if(element.style.background == 'rgb(240, 240, 240)'){

				  	element.style.background = '#17a2b8e6';
				  	this.fridayHours.myarraylist.push(departureTime);
				  	console.log("Added");
		            console.log(this.fridayHours);

		     } else {
				  	element.style.background = 'rgb(240, 240, 240)';
				  	this.removeTime(this.fridayHours.myarraylist,departureTime);
				  	console.log("removed");
				  	console.log(this.fridayHours);
		     }
	    }
	    if(dayOfTheWeek == "Saturday") {

	          if(Object.keys(this.saturdayHours).length==0){

		            this.saturdayHours = {            
					   myarraylist: []
					};
		            this.saturdayHours.scheduleDate = scheduleDate;
		      };

			  if(element.style.background == 'rgb(240, 240, 240)'){

				  	element.style.background = '#17a2b8e6';
				  	this.saturdayHours.myarraylist.push(departureTime);
				  	console.log("Added");
		            console.log(this.saturdayHours);

		     } else {
				  	element.style.background = 'rgb(240, 240, 240)';
				  	this.removeTime(this.saturdayHours.myarraylist,departureTime);
				  	console.log("removed");
				  	console.log(this.saturdayHours);
		     }
	    }
  }

  removeTime(hoursArray,element) {
    hoursArray.forEach((value,index)=>{
        if(value==element) hoursArray.splice(index,1);
    });
   }

  assingDriver() {
  	
  	console.log("jjmy data");
    console.log(this.routeData);

    var dateCreated = new Date();
    var dateCreatedStr = dateCreated.toLocaleDateString();

    var assignObj:any = {

         routeId:this.routeData.routeno,
         subrouteno:this.routeData.subrouteno,
         driverId:this.driverId,
         departure:this.routeData.departureaddress,
         destination:this.routeData.destinationaddress,
         fare:this.routeData.fare,
         mondayHrs:this.mondayHours,
         tuesdayHrs:this.tuesdayHours,
         wednesdayHrs:this.wednesdayHours,
         thursdayHrs:this.thursdayHours,
         fridayHrs:this.fridayHours,
         satdayHrs:this.saturdayHours,
         dateBooked:dateCreatedStr,
         pickups:this.routeData.pickups
     };

    console.log("m data is" );
    console.log(assignObj);
    this.routeservicesService.assignaDriver(assignObj);
    this.router.navigate(['/routeschedules']);


  }
}
