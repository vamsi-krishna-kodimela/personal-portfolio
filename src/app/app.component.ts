import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'portfolio-1';

  @ViewChild('about') about: ElementRef | undefined;

  ngAfterViewInit() {
    let offset = window.innerHeight * 4.5;
    if (this.about) {
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
    const descriptionOffset =
      this.about?.nativeElement.scrollHeight + 80 - window.innerHeight;
    timeline
      .to('#about', { top: '0', duration: 1 })
      .to('.description', {
        y: `-${descriptionOffset}`,
        duration: 3,
      })
      .to('#projects', { top: '0', duration: 1 })
      .to('#contactUs', { top: '0', duration: 1 });
  }
}
