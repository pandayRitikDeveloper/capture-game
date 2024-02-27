import { Component } from '@angular/core';

export interface City {
  name: string;
  distance: number;
  image?: string;
}

export interface Vehicle {
  type: string;
  range: number;
  count: number;
  image?: string;
}

export interface SelectedDetails {
  copName: string;
  copCity?: City;
  copVehicle?: Vehicle;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cityName = '';
  cityImage = '';
  gameData = {
    cops: [
      {
        name: 'Cop 1',
        image:
          'https://st2.depositphotos.com/3528377/6481/i/450/depositphotos_64810021-stock-photo-policeman-with-folded-hands.jpg',
      },
      {
        name: 'Cop 2',
        image:
          'https://images.unsplash.com/photo-1554579780-381ea7224ddd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saWNlJTIwb2ZmaWNlcnxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        name: 'Cop 3',
        image:
          'https://media.gettyimages.com/id/186735363/photo/police-officer.jpg?s=612x612&w=gi&k=20&c=S_iMYOUhMGwW2r2-4HlKUQeuS2nGZq9AMvwjdtuwZ_I=',
      },
    ],
    cities: [
      {
        name: 'Yapkashnagar',
        distance: 60,
        image:
          'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg',
      },
      { name: 'Lihaspur', distance: 50, image: '' },
      { name: 'Narmis City', distance: 40, image: '' },
      { name: 'Shekharvati', distance: 30, image: '' },
      { name: 'Nuravgram', distance: 20, image: '' },
    ],
    vehicles: [
      { type: 'EV Bike', range: 60, count: 2, image: '' },
      {
        type: 'EV Car',
        range: 100,
        count: 1,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcCAVsC4Sj-vOw4hSoyRfThxVzKrP5j_VJhqKiohz1w&s',
      },
      { type: 'EV SUV', range: 120, count: 1, image: '' },
    ],
  };
  cops = [];
  cities = [];
  vehicles = [];
  selectedCopsDetails: SelectedDetails[] = [];

  ngOnInit() {
    this.cops = this.gameData.cops;
    this.cities = this.gameData.cities;
    this.vehicles = this.gameData.vehicles;
  }

  selectCity(copName: string, city: string) {
    const copData: SelectedDetails = {
      copName: copName,
      copCity: this.cities.find((el) => el.name === city),
    };
    this.updateSelectedDetails(copData);

    this.cityImage = this.selectedCopsDetails.find(
      (el) => el.copCity.name === city
    ).copCity.image;
  }

  selectVehicle(copName: string, vehicle: string) {
    const copData: SelectedDetails = {
      copName: copName,
      copVehicle: this.vehicles.find((vh) => vh.type === vehicle),
    };
    this.updateSelectedDetails(copData);
  }

  updateSelectedDetails(copData: SelectedDetails) {
    const existingCopDataIndex = this.selectedCopsDetails.findIndex(
      (data) => data.copName === copData.copName
    );
    if (existingCopDataIndex !== -1) {
      Object.assign(this.selectedCopsDetails[existingCopDataIndex], copData);
    } else {
      this.selectedCopsDetails.push(copData);
    }
    console.log(this.selectedCopsDetails);
  }
}
