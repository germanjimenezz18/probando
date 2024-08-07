import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
  @Input()
  public countries: Country[] = []

  constructor(private countriesService: CountriesService) { }

  searchByRegion(term: string) {
    this.countriesService.searchRegion(term).subscribe(
      
      
      countries => {
        console.log(this.countries);
        this.countries = countries}
    )
  }
}
