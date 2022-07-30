import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {
  @Input() result:any;
  isplay=false
  audio = new Audio();
  constructor() { }

  ngOnInit(): void {
    this.audio.src = this.result.previewUrl;
    this.audio.load();

  }
  playAudio(){
    this.isplay ? this.audio.pause() :this.audio.play()
    this.isplay = !this.isplay
    console.log(this.isplay)

  }
}
