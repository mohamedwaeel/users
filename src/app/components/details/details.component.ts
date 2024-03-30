import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UsersdataService } from 'src/shared/services/usersdata.service';
import { details } from 'src/shared/interfaces/users';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _UsersdataService: UsersdataService
  ) {}
  userDetails!: details;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (params) => {
        let userId: any = params.get('id');
        this._UsersdataService.getUserData(userId).subscribe({
          next: (response) => {
            console.log(response);

            this.userDetails = response.data;
          },
        });
      },
    });
  }
}
