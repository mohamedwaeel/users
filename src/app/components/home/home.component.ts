import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { details } from 'src/shared/interfaces/users';
import { UsersdataService } from 'src/shared/services/usersdata.service';
import { SearchPipe } from 'src/app/pipe/search.pipe';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private _UsersdataService: UsersdataService) {}
  searchInput!: number;
  users: details[] = [];
  ngOnInit(): void {
    this._UsersdataService.getAllData().subscribe({
      next: (response) => {
        this.users = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
