import { ActivatedRoute, Params } from '@angular/router';
import { NewsService } from './../../news.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-data',
  templateUrl: './news-data.component.html',
  styleUrls: ['./news-data.component.css']
})
export class NewsDataComponent implements OnInit {
  public newsContent:any='';
  public newsUrl:string='';
  constructor(private newsservice:NewsService,private route:ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.newsservice.newsCall(params.id).subscribe(
          (res)=>
          {
            console.log(res);
            this.newsContent = res.json();
          }
        )
      }
    )
  }
}
