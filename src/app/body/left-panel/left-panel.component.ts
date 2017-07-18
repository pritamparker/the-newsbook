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
      "id":"bbc-sport",
      "name":"BBC Sport"
    },
    {
      "id":"cnn",
      "name":"CNN"
    },
        {
      "id":"espn",
      "name":"ESPN"
    },
    {
      "id":"fox-sports",
      "name":"Fox Sports"
    },
    {
      "id":"google-news",
      "name":"Google News"
    },
        {
      "id":"techcrunch",
      "name":"TechCrunch"
    },
       {
      "id":"time",
      "name":"Time"
    },
    {
      "id":"the-hindu",
      "name":"The Hindu"
    },
    {
      "id":"the-times-of-india",
      "name":"The Times of India"
    }
    ];
  constructor(private newsService:NewsService) { }

  ngOnInit() {
  }
}
