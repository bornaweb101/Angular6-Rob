import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  latitude: any;
  longitude: any;

  iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

  markerTypes = [
    {
      text: "Parking", value: "parking_lot_maps.png"
    }
    // ,
    // {
    //   text: "Library", value: "library_maps.png"
    // },
    // {
    //   text: "Information", value: "info-i_maps.png"
    // }
  ];

  selectedMarkerType: string = "parking_lot_maps.png";

  isMenuHidden = true;

  abouts = [{
    year:'1966',
    aboutdetail:'As a new immigrant to Canada, Ben Kochman acquired two delivery trucks, an office, a few loading doors, and founded Kochman Transport',
    img:'',
    isShow:false
  },
  {
    year:'1979',
    aboutdetail:'As a new immigrant to Canada, Ben Kochman acquired two delivery trucks, an office, a few loading doors, and founded Kochman Transport',
    img:'',
    isShow:false
  },
  {
    year:'1990',
    aboutdetail:'As a new immigrant to Canada, Ben Kochman acquired two delivery trucks, an office, a few loading doors, and founded Kochman Transport',
    img:'',
    isShow:false
  },
  {
    year:'1994',
    aboutdetail:'As a new immigrant to Canada, Ben Kochman acquired two delivery trucks, an office, a few loading doors, and founded Kochman Transport',
    img:'',
    isShow:false
  },
  {
    year:'2003',
    aboutdetail:'As a new immigrant to Canada, Ben Kochman acquired two delivery trucks, an office, a few loading doors, and founded Kochman Transport',
    img:'',
    isShow:false
  },
  {
    year:'2013',
    aboutdetail:'As a new immigrant to Canada, Ben Kochman acquired two delivery trucks, an office, a few loading doors, and founded Kochman Transport',
    img:'',
    isShow:false
  }];

  ngOnInit() {

  }

  ngAfterContentInit() {
    let mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

  }

  setMapType(mapTypeId: string) {
    this.map.setMapTypeId(mapTypeId)
  }

  setCenter() {
    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    let location = new google.maps.LatLng(this.latitude, this.longitude);

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      title: 'Got you!'
    });

    marker.addListener('click', this.simpleMarkerHandler);

    marker.addListener('click', () => {
      this.markerHandler(marker);
    });
  }

  simpleMarkerHandler() {
    alert('Simple Component\'s function...');
  }

  markerHandler(marker: google.maps.Marker) {
    alert('Marker\'s Title: ' + marker.getTitle());
  }

  showCustomMarker() {


    this.map.setCenter(new google.maps.LatLng(this.latitude, this.longitude));

    let location = new google.maps.LatLng(this.latitude, this.longitude);

    console.log(`selected marker: ${this.selectedMarkerType}`);

    let marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: this.iconBase + this.selectedMarkerType,
      title: 'Got you!'
    });
  }



  toggleMap() {
  }

  circleclick(i){
    console.log("clicked"+i);
    this.abouts[i].isShow = !this.abouts[i].isShow;
  }

  showMenuFunction(){
    console.log("show menu clicked");
    this.isMenuHidden = false;
  }

  hideMenu(){
    console.log("hide menu clicked");
    this.isMenuHidden = true;
  }
}
