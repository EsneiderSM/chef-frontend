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

  Register:NewsletterModel = new NewsletterModel();
  sendForm:boolean = false;
  registerSuccess:boolean = false;

  constructor(private newsletterService:NewsletterService){}

  ngOnInit() {}

  //Btn submit
  onSubmit(form : NgForm){

    this.sendForm = true;
    this.newsletterService.createRegister(this.Register)
      .subscribe(res =>{
        
        this.sendForm = false;
        this.registerSuccess = true;
        form.resetForm();

        setTimeout(() => { this.registerSuccess = !this.registerSuccess }, 3000);

      }, error =>{
        console.log(error)
      });
  }

  //Validate numbers
  onlyNumbers(event:any){
    const pattern = /[0-9\+\-\ ]/;
    let key = String.fromCharCode(event.charCode);
    if (!pattern.test(key)) {
      return false;
    }
  }

}
