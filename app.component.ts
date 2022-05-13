import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment-input-ouput-services-withoutrouting';
  
  public newsDetailId: number;
  showNews = true;
  

  newsData(event: number) {
    this.newsDetailId = event;
    this.showNews = false
  }
}
