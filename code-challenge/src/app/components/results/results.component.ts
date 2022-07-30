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
  constructor(private searchService:SearchService) { 
  }

  ngOnInit(): void {
    this.getResultList()
  }
  getResultList(){
    this.searchService.getSongs()
      .subscribe((jsonResponse:any)=>{
        let jsonFile = eval(jsonResponse);
        this.resultList = jsonFile.results
        console.log(this.resultList)
      }
      ,(error)=>{
        console.log("error"+error)
      })
  }

}
