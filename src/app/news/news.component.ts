import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NewsComponent implements OnInit {
  articles!: any;
  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.get().subscribe((data: any) => {
      this.articles = data['articles'];
    })
  }
}
1