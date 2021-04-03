import { Component, OnInit } from '@angular/core';
import { HttpdataService } from '../httpdata.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countryobj: any;
  country:any;
  flag=false;
  countryName:any;

  constructor(private httpreq: HttpdataService) { }

  ngOnInit(): void {
    this.httpreq.getCountry('http://vocab.nic.in/rest.php/country/json').subscribe((res) => {
      this.countryobj = res;
      this.country = this.countryobj.countries;
    }) 
  }

  passCountryData(name:any) {
    this.flag=true;
    this.countryName=name
  }

 

}
