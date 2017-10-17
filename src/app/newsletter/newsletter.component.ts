import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm }   from '@angular/forms';
import { NewsletterModel } from '../model/newsletter.model';
import { NewsletterService } from '../service/newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})

export class NewsletterComponent implements OnInit {

  Register = new NewsletterModel();
  sendForm = false;

  constructor(private newsletterService:NewsletterService){}

  ngOnInit() {}

  onSubmit(form : NgForm){
    this.newsletterService.createRegister(this.Register);
    this.sendForm = true;
    //form.resetForm();

  }

}
