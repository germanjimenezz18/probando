import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/country.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  @Input() public countries: Country[] = []
  constructor(private countriesService: CountriesService) { }

  searchByCountry(term: string) {
    this.countriesService.searchCountry(term).subscribe(
      country => this.countries = country
    )
  }
}
