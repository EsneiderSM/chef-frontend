import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { NewsletterModel } from '../model/newsletter.model';

@Injectable()
export class NewsletterService {

  constructor(private http: Http){}

  createRegister(model:NewsletterModel): Observable<NewsletterModel>{

    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers : headers });

    return this.http.post('http://chef.labagenciadigital.com/api/Newsletter', body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }


}
