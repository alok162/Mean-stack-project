import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  vehicalFord =[];
  vehicalModels = [];
  selectedCar = 'select car'
  
  constructor(private http: HttpClient,
    )
    {
    }


  acura() {
    this.acuraService().subscribe(res => {
      this.selectedCar = 'Acura';
      this.vehicalModels= res.data[0].models;
      console.log('data', this.vehicalModels);
 })
  }

  acuraService(): Observable<any>{
    return this.http.get('http://localhost:3000/acura', { headers: {'Content-Type': 'application/json'} })
        
    }

  ford() {
    this.fordService().subscribe(res => {
         this.selectedCar = 'Ford';
         this.vehicalModels= res.data[0].models;
         console.log('data', this.vehicalModels);
    })
  }
  fordService(): Observable<any>{
    return this.http.get('http://localhost:3000/ford', { headers: {'Content-Type': 'application/json'} })
        
    }

}
