import { Component, OnInit, Output, Input } from '@angular/core';
import { newsServices } from '../news.services';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private newsSer: newsServices) { }
  @Input() hidedetails :boolean;
  @Output() newsIdEmitter = new EventEmitter<number>()
  ngOnInit(): void {
    this.loadHeadlines()}
  headlines:any = [];
  loadHeadlines(){
    this.newsSer.fetchNews().subscribe(responseData =>{
      console.log(responseData)
      this.headlines = responseData;
    })
  }
  onClick(id: number){
    // console.log("clicked");
    console.log("id is", id);
    // this.index =id
    this.newsIdEmitter.emit(id)      
  }
}
