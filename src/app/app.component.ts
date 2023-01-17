import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'language-project';
  data : any;
  constructor(private http: HttpClient) {
    this.http.get('https://loudsheep.ddns.net/getDataForCharts.php').subscribe(data => {
      this.data = JSON.stringify(data);
    });
  }

}
