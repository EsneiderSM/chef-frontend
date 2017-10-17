import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { MarcaComponent } from './marca/marca.component';

import { NewsletterService } from './service/newsletter.service';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsletterComponent,
    MarcaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    NewsletterService
  ],
  bootstrap: [MarcaComponent]
})
export class AppModule { }
