import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  housingLocation: Housinglocation | undefined;
  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
     this.housingLocation=
      this.housingService.getHousingLocationById(
        Number(this.route.snapshot.params['id'])
      );
  }
}
