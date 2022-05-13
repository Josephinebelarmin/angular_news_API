import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { map } from "rxjs/operators"
// import { title } from "process";

 @Injectable({ providedIn: 'root' })


export class newsServices {
    constructor(private http:HttpClient){}
    fetchNews(){
        return this.http.get(url)
        .pipe(map((news: any ) => {
             let newsArray: newsFormat[] = [];
            if(news.status === 'success' && news.results?.length > 0){
                newsArray = news.results.map((el: any) => {
                    let data = {title: el.title, link: el.link, description: el.description}
                    return data
                });   
            }return newsArray;
        }))
    }
}

interface newsFormat {
    title: string,
    description?: string,
    link: string
}