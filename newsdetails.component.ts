import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'; 
import { newsServices } from '../news.services';

@Component({
  selector: 'app-newsdetails',
  templateUrl: './newsdetails.component.html',
  styleUrls: ['./newsdetails.component.css']
})
export class NewsdetailsComponent implements OnInit {
@Input() newsId = 0
@Output() showNewscompEmitter = new EventEmitter<boolean>()
description: any;
  constructor(private newsSer: newsServices) { }

  ngOnInit(): void {
    console.log("from details" ,this.newsId);  
    this.loadDescription(); 
  }
  loadDescription(){
    this.newsSer.fetchNews().subscribe(responseData =>{
      console.log(responseData[this.newsId].description)
      this.description = responseData[this.newsId].description;
      
    })
  }
  backToNews(){
    let hidedetails = false;
      this.showNewscompEmitter.emit(hidedetails)
  }
}
