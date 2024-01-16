import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  readonly API_PATH = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  sendFormData(formData: FormData): Observable<any> {
    return this.http.post(this.API_PATH + '/colors/', formData);
  }
}
