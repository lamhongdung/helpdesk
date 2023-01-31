import { Component } from '@angular/core';
import { DualListComponent } from 'angular-dual-listbox';
import { NgModule } from '@angular/core';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onDestinationChange(){
    let i = 0;
    i = this.confirmed.length;

    this.confirmed.forEach(function (value) {
      console.log(value.key + " - " + value.station + " - " + value.state);
    }); 

    // console.log(this.confirmed[0].key);
    // console.log(this.confirmed[0].station);
    // console.log(this.confirmed[0].state);
  }

  length = 0;

  onChangeLength(value: string){
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)){
      this.length = parsedValue;
      console.log(this.length);
      console.log(value);
    }
  }

  key: string = "";
  filter = true;
  keepSorted = true;
  display: any;

  value="";

  clearValue() {
   this.value="";
 }


	private stationLabel(item: any) {
		return item.station + ', ' + item.state;
	}

  private useStations() {
		this.key = 'key';
		this.display = this.stationLabel;
		this.keepSorted = true;
		this.source = this.source;
		this.confirmed = this.confirmed;
	}

  source = [
    {
      "key": 1,
      "station": "Antonito",
      "state": "CO"
    },
    {
      "key": 2,
      "station": "Big Horn",
      "state": "NM"
    },
    {
      "key": 3,
      "station": "Sublette",
      "state": "NM"
    },
    {
      "key": 4,
      "station": "Toltec",
      "state": "NM"
    },
    {
      "key": 5,
      "station": "Osier",
      "state": "CO"
    },
    {
      "key": 6,
      "station": "Chama",
      "state": "NM"
    },
    {
      "key": 7,
      "station": "Monero",
      "state": "NM"
    },
    {
      "key": 8,
      "station": "Lumberton",
      "state": "NM"
    },
    {
      "key": 9,
      "station": "Duice",
      "state": "NM"
    },
    {
      "key": 10,
      "station": "Navajo",
      "state": "NM"
    },
    {
      "key": 11,
      "station": "Juanita",
      "state": "CO"
    },
    {
      "key": 12,
      "station": "Pagosa Jct",
      "state": "CO"
    },
    {
      "key": 13,
      "station": "Carracha",
      "state": "CO"
    },
    {
      "key": 14,
      "station": "Arboles",
      "state": "CO"
    },
    {
      "key": 15,
      "station": "Solidad",
      "state": "CO"
    },
    {
      "key": 16,
      "station": "Tiffany",
      "state": "CO"
    },
    {
      "key": 17,
      "station": "La Boca",
      "state": "CO"
    },
    {
      "key": 18,
      "station": "Ignacio",
      "state": "CO"
    },
    {
      "key": 19,
      "station": "Oxford",
      "state": "CO"
    },
    {
      "key": 20,
      "station": "Florida",
      "state": "CO"
    },
    {
      "key": 21,
      "station": "Bocea",
      "state": "CO"
    },
    {
      "key": 22,
      "station": "Carbon Jct",
      "state": "CO"
    },
    {
      "key": 23,
      "station": "Durango",
      "state": "CO"
    },
    {
      "key": 24,
      "station": "Home Ranch",
      "state": "CO"
    },
    {
      "key": 25,
      "station": "Trimble Springs",
      "state": "CO"
    },
    {
      "key": 26,
      "station": "Hermosa",
      "state": "CO"
    },
    {
      "key": 27,
      "station": "Rockwood",
      "state": "CO"
    },
    {
      "key": 28,
      "station": "Tacoma",
      "state": "CO"
    },
    {
      "key": 29,
      "station": "Needleton",
      "state": "CO"
    },
    {
      "key": 30,
      "station": "Elk Park",
      "state": "CO"
    },
    {
      "key": 31,
      "station": "Silverton",
      "state": "CO"
    },
    {
      "key": 32,
      "station": "Eureka",
      "state": "CO"
    }
  ];

  // confirmed = [{
  //   "key": 30,
  //   "station": "Elk Park",
  //   "state": "CO"
  // }];
  confirmed: Array<any> = [];

}
