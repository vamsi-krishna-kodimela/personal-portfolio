import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeatherModule } from 'angular-feather';
import {
  Menu,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from 'angular-feather/icons';

const icons = { Menu, Github, Linkedin, Twitter, Instagram };

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FeatherModule.pick(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
