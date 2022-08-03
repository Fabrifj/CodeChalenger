import { Component, OnInit } from '@angular/core';
import {SearchService} from 'src/app/services/search.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  /**
   * Recive parmas to do the search and send to the search service
   * 
   * @param songName 
   * @param limit 
   */
  search(songName:string, limit:string){
    this.searchService.searchSong(songName,limit)
    
  }
}
