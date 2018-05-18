// import { Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'app';
//   vehicalFord =[];
//   vehicalModels = [];
//   selectedCar = 'select car'
  
//   constructor(private http: HttpClient,) { }


//   acura() {
//     this.acuraService().subscribe(res => {
//       this.selectedCar = 'Acura';
//       this.vehicalModels= res.data[0].models;
//       console.log('data', this.vehicalModels);
//  })
//   }

//   acuraService(): Observable<any>{
//     return this.http.get('http://localhost:3000/acura', { headers: {'Content-Type': 'application/json'} })
        
//     }

//   ford() {
//     this.fordService().subscribe(res => {
//          this.selectedCar = 'Ford';
//          this.vehicalModels= res.data.car;
//          console.log('data', res.data.car);
//     })
//   }
//   fordService(): Observable<any>{
//     return this.http.get('http://localhost:3000/car', { headers: {'Content-Type': 'application/json'} })
        
//     }

// }















import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  vehicalFord =[];
  vehicalModels = [];
  selectedCar: any;
  carArray = [];
  carModels: any;
  constructor(private http: HttpClient,) { 
    this.carList();
  }


carList() {
  this.carService().subscribe(res => {
    // this.vehicalModels= res;
    this.carArray = res['data'];
    console.log('data', this.carArray);
})
}

carService() {
  return this.http.get('http://localhost:3000/car', { headers: {'Content-Type': 'application/json'} })
}



getModel(carId, carName) {
  this.selectedCar = carName;
  this.carArray.forEach(carObj => {
    if (carObj._id === carId) {
      this.carModels = carObj.models;
      console.log(this.carModels, carName);
    }
  });
}

  acuraService(): Observable<any>{
    return this.http.get('http://localhost:3000/acura', { headers: {'Content-Type': 'application/json'} })
        
    }

  ford() {
    this.fordService().subscribe(res => {
         this.selectedCar = 'Ford';
         this.vehicalModels= res.data.car;
         console.log('data', res.data.car);
    })
  }
  fordService(): Observable<any>{
    return this.http.get('http://localhost:3000/car', { headers: {'Content-Type': 'application/json'} })
        
    }

}
