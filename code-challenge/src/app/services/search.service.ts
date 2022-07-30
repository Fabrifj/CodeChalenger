import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  defUrl = "https://itunes.apple.com/search?term=";
  searchWords = ""
  limitResult = ""
  searchUrl = ""

  /**
   * Get and create que params for the query
   * 
   * @param searchWord   
   * @param limitResult 
   */
  searchSong(searchWord:string, limitResult:string){
    this.searchWords = ""
    let arraywords = searchWord.split(" ")
    arraywords.forEach((word)=>{
      this.searchWords = this.searchWords +"+"+ word
    })
    this.searchWords = this.searchWords.slice(1)
    limitResult.length != 0 ? this.limitResult = limitResult : this.limitResult = "10"
    this.searchUrl = this.defUrl + this.searchWords + "&limit=" + this.limitResult
    
  }
  /**
   * 
   * @returns the query
   */
  getSongs(){
    return  this.http.get(this.searchUrl)
  }
  /**
   * 
   * @returns the phares searched
   */
  getWords(){
    return this.searchWords
  }
}
