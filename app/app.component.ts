import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Houston Texas';
  data;
  constructor(public http:HttpClient){

      this.http.get('http://api.openweathermap.org/data/2.5/weather?q=Houston&appid=9bbfaccfac0f45cd13f1ba17e3cfaec7')
        .subscribe((data) => {
          console.log(data);
          this.data = data;
        },  (err) => {
          console.log(err);
       }
     )
   }
}    
