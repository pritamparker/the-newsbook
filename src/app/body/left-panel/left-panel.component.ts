import { NewsappPage } from './../../../../e2e/app.po';
import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  news_source = [
    {
      "id":"bbc-news",
      "name":"BBC News"
    },
    {
      "id":"google-news",
      "name":"Google News"
    },
       {
      "id":"time",
      "name":"Time"
    },
    {
      "id":"the-hindu",
      "name":"The Hindu"
    }
    ];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
  }
}
