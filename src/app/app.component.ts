import { Component, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {
  Project,
  Skill,
  SocialLink,
  projects,
  skills,
  socialLinks,
} from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'portfolio-1';
  skills: Skill[] = [];
  projects: Project[] = [];
  socialLinks: SocialLink[] = [];
  constructor() {
    this.skills = [...skills];
    this.projects = [...projects];
    this.socialLinks = [...socialLinks];
  }

  @ViewChild('about') about: ElementRef | undefined;
  @ViewChild('project') projectsRef: ElementRef | undefined;

  generateOffset() {
    let offset = window.innerHeight * 3.5;
    if (this.about) {
      offset += this.generateDescriptionOffset();
    }
    if (this.projectsRef) {
      offset += this.generateProjectsOffset();
    }
    return offset;
  }

  generateDescriptionOffset() {
    let descriptionOffset = 0;
    if (this.about) {
      descriptionOffset =
        this.about.nativeElement.scrollHeight -
        this.about.nativeElement.clientHeight +
        80;
    }
    return descriptionOffset;
  }

  generateProjectsOffset() {
    let projectsOffset = 0;
    if (this.projectsRef) {
      projectsOffset =
        this.projectsRef.nativeElement.scrollWidth -
        this.projectsRef.nativeElement.clientWidth +
        80;
    }
    return projectsOffset;
  }

  ngAfterViewInit() {
    gsap.registerPlugin(ScrollTrigger);
    const pageAnimaionConfig: ScrollTrigger.Vars = {
      trigger: '.main',
      start: 'top top',
      end: `+=${this.generateOffset()}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    };

    const timeline = gsap.timeline({
      scrollTrigger: pageAnimaionConfig,
    });

    timeline
      .to('#about', { top: '0', duration: 3, ease: 'power2.inOut' })
      .to('.description', {
        y: `-${this.generateDescriptionOffset()}`,
        duration: 3,
        ease: 'power2.inOut',
      })
      .to('#projects', { top: '0', duration: 3, ease: 'power2.inOut' })
      .to('.projects-grid', {
        x: `-${this.generateProjectsOffset()}`,
        duration: 3,
        ease: 'power2.inOut',
      })
      .to('#contactUs', { top: '0', duration: 3, ease: 'power2.inOut' });
    this.listenToMouse();
  }

  get contactSocialLinks() {
    return this.socialLinks.filter((socialLink) =>
      ['all', 'contact'].includes(socialLink.type)
    );
  }

  listenToMouse() {
    document.body.addEventListener('mousemove', (evt) => {
      const mouseX = evt.clientX;
      const mouseY = evt.clientY;

      gsap.set('.cursor', {
        x: mouseX,
        y: mouseY,
      });

      gsap.set('.cursor-point', {
        x: mouseX,
        y: mouseY,
      });
    });
  }
  navigateTo(url: string) {
    window.open(url, '_blank');
  }
}
