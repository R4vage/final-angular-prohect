import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumItem, Albums, Artist } from '../core/models/album.models';
import { PlaylistItem } from '../core/models/playlist.models';
import { SearchResults } from '../core/models/rest.models';
import { Track } from '../core/models/track.models';
import { SearchRestService } from './services/search-rest.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchResults!:SearchResults;
  searchValue!:string;
  artists:Artist[] = [];
  tracks:Track[] = [];
  albums: AlbumItem[] = [];
  playlists: PlaylistItem[] = []
  constructor(private restService: SearchRestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: params => {this.searchValue = params['value']} 
    })
    this.restService.searchItem(this.searchValue).subscribe(response => {
      this.searchResults = response
      this.artists = response.artists.items;
      this.tracks = response.tracks.items;
      this.albums = response.albums.items;
      this.playlists = response.playlists.items;
      console.log(this.playlists)
    })
  }


}
