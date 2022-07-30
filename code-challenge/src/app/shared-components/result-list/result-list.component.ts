import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {
  @Input() results = [{"kind":"song",
        "artistName":"Jack Johnson",
        "collectionName":"Sleep Through the Static",
        "trackName":"If I Had Eyes",
        "previewUrl":"https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f9/fd/22/f9fd22b4-856d-39fa-a891-693806c4c7f3/mzaf_11289786697551409595.plus.aac.p.m4a",
        "artworkUrl100":"https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/cb/62/f3/cb62f354-aee2-f04d-ef40-3573feda30d9/00602537869640.rgb.jpg/100x100bb.jpg",
        "trackPrice":1.29,
        "trackTimeMillis":238806,
      }]
  limit = 10
  constructor() { }

  ngOnInit(): void {
  }

}
