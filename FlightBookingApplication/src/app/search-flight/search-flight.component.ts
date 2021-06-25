import { Component, OnInit } from '@angular/core';
import SearchedFlightDetails from '../entity/SearchedFlightDetails';
import SearchFlight from '../entity/SearchFlight';
import FlightListService from '../service/FlightListService';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.sass']
})
export class SearchFlightComponent implements OnInit {

  constructor(private flightListService: FlightListService) { }
  searchFlight: SearchFlight = new SearchFlight(); //state
  
  availFlightDetail: SearchedFlightDetails = new SearchedFlightDetails(); //state
  availFlightDetails: SearchedFlightDetails[] = []; //state
  ngOnInit(){
    const promise= this.flightListService.getFlightDetails();
    promise.subscribe((response) =>{
      console.log(response);
      this.availFlightDetails= response as SearchedFlightDetails[];
    })

  }
  searchFlights(){
    const element1= document.getElementById("from");
    const from = ( element1 as HTMLInputElement).value;
    const element2= document.getElementById("to");
    const to = ( element2 as HTMLInputElement).value;
    const element3= document.getElementById("date");
    const date = ( element3 as HTMLInputElement).value;
    if(!from)
      return;
    const promise = this.flightListService.getSearchedFlights(from,to,date);
    promise.subscribe((response) => {
      this.availFlightDetails = response as SearchedFlightDetails[];
    });
  }

}
