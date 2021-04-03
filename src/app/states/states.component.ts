import { Component, Input, OnInit } from '@angular/core';
import { HttpdataService } from '../httpdata.service';



@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

  name:any
  flags:any
  flagData:any
  obj:any
  states:any
  flag=false

  @Input() set countryName(val:String) {
    this.name = val
    this.name = this.name.toLowerCase();
    this.name = this.name[0].toUpperCase() + this.name.slice(1)
    this.obj = {
      "country": this.name
    }
    console.log(this.obj);
    this.name ? this.httpreq.getCountryFlag('https://countriesnow.space/api/v0.1/countries/flag/images',this.obj).
    subscribe((res) => {
      this.flags = res
      this.flagData = this.flags.data
      console.log(this.flagData)
    }) : null
    this.name ? this.httpreq.getCountryFlag('https://countriesnow.space/api/v0.1/countries/states',this.obj).
    subscribe((res) => {
      this.states = res;
      this.states=this.states.data.states
      console.log(this.states)
    }) : null  }

    goToRc2() {
      this.flag=true
    }

  constructor(private httpreq:HttpdataService) { }

  ngOnInit(): void {
  }

}
