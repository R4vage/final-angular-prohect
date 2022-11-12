import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user-profile.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user!:User
  constructor() { }

  ngOnInit(): void {
  }

}
