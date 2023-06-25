import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { skills } from './data/skills.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'portfolio-1';
  skills;
  constructor() {
    this.skills = [...skills];
  }

  @ViewChild('about') about: ElementRef | undefined;

  ngAfterViewInit() {
    let offset = window.innerHeight * 3.5;
    let descriptionOffset = 0;
    if (this.about) {
      descriptionOffset =
        this.about.nativeElement.scrollHeight -
        this.about.nativeElement.clientHeight +
        80;
      offset += this.about.nativeElement.scrollHeight;
    }

    gsap.registerPlugin(ScrollTrigger);
    const pageAnimaionConfig: ScrollTrigger.Vars = {
      trigger: '.main',
      start: 'top top',
      end: `+=${offset}`,
      scrub: true,
      pin: true,
    };

    const timeline = gsap.timeline({
      scrollTrigger: pageAnimaionConfig,
    });

    timeline
      .to('#about', { top: '0', duration: 3, ease: 'power2.inOut' })
      .to('.description', {
        y: `-${descriptionOffset}`,
        duration: 1,
      })
      .to('#projects', { top: '0', duration: 3, ease: 'power2.inOut' })
      .to('#contactUs', { top: '0', duration: 3, ease: 'power2.inOut' });
  }
}
