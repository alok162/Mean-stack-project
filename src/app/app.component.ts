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
  vehical =[];
  
  constructor(private http: HttpClient,
    )
    {}
  ford() {
    this.fordService().subscribe(res => {
         this.vehical= res;
         console.log('data', res);
    })
  }
  fordService(): Observable<any>{
    return this.http.get('http://localhost:3000/ford', { headers: {'Content-Type': 'application/json'} })
        
    }

}
