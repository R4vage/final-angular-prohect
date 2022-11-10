import { Component, OnInit } from '@angular/core';
import { UserProfileRestService } from '../../services/user-profile-rest.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private restService: UserProfileRestService) { }

  ngOnInit(): void {
    this.restService.getProfile()
  }

}
