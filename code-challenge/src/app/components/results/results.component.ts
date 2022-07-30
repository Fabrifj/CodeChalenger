import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  searchedWord = "ss"
  resultList = []
  limit = ""
  constructor(private searchService:SearchService) { 
  }

  ngOnInit(): void {
    this.getResultList()
    
  }
  /**
   *  Recive a list of all song and update the title searched
   * 
   */
  getResultList(){
    this.searchService.getSongs()
      .subscribe((jsonResponse:any)=>{
        let jsonFile = eval(jsonResponse);
        this.resultList = jsonFile.results
        this.limit = jsonFile.resultCount
        this.getSearchWords()
      }
      ,(error)=>{
        console.log("error"+error)
      })
  }
  getSearchWords(){
    this.searchedWord = this.searchService.getWords()
      
  }

}
