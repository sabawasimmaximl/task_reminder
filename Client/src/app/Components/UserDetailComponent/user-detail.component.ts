import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { User }         from '../../Class/user';
import { UserService }  from '../../Services/UserService/user.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.userService.getUser(+params['id']))
    //   .subscribe(singleuser => this.user = singleuser);
    //   console.log(this.user);
  }

  goBack(): void {
    this.location.back();
  }



}
