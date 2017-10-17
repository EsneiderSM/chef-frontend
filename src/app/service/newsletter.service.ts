import { Injectable } from '@angular/core';
import { NewsletterModel } from '../model/newsletter.model'

@Injectable()
export class NewsletterService {

  constructor(){}

  createRegister(model:NewsletterModel){
    console.log('Desde el servicio!!')
    console.log(model);
  }


}
