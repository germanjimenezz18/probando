import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/countries';

@Injectable({
    providedIn: 'root'
})
export class CountriesService {
    private apiUrl: string = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCapital(query: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${query}`
        return this.http.get<Country[]>(url).pipe(
            catchError(() => of([])),
        )
    }

    searchCountry(query: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${query}`
        return this.http.get<Country[]>(url).pipe(
            catchError(() => of([]))
        )
    }

    searchRegion(query: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${query}`
        return this.http.get<Country[]>(url).pipe(
            catchError(() => of([]))
        )
    }

    searchCoutryAlphaCode(query: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${query}`
        return this.http.get<Country[]>(url).pipe(
            map(countries => countries.length > 0 ? countries[0] : null),
            catchError(() => of(null))
        )
    }

}