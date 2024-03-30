import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Support } from 'src/shared/interfaces/users';
import { UsersdataService } from 'src/shared/services/usersdata.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private _UsersdataService: UsersdataService) {}
  footerSupport!: Support;
  ngOnInit(): void {
    this._UsersdataService.getAllData().subscribe({
      next: (response) => {
        this.footerSupport = response.support;
      },
    });
  }
}
