import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule,IconsModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements
  OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }

  serviceData = [
    {
      icon:'trending-up',
      title:'Website Design & Development',
      desc:'Custom, responsive websites built to engage visitors and convert leads — fast, modern, and user-friendly.'
    },
    {
      icon:'dollar-sign',
      title:'SEO Optimization (On-Page & Technical)',
      desc:'We make sure your site meets Google’s technical standards — from meta tags to mobile speed — so it ranks higher and runs faster.'
    },
    {
      icon:'compass',
      title:'Local SEO & Google Business Optimization',
      desc:'Ideal for service-based businesses. Get found in local search and Maps with listings, citations, and local backlinks'
    },
    {
      icon:'command',
      title:'Content Strategy & Blog SEO',
      desc:'We create optimized blog content that ranks, educates, and brings in organic traffic long-term.'
    },
    {
      icon:'box',
      title:'Monthly SEO Packages',
      desc:'Ongoing SEO strategy and execution. We monitor rankings, adjust strategy, and grow your traffic month after month.'
    },
    {
      icon:'camera',
      title:'Website Redesigns & SEO Audits',
      desc:'Already have a site? We offer full audits, redesigns, and SEO improvements to maximize performance.'
    }
    // {
    //   icon:'bell',
    //   title:'Social Media',
    //   desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    // },
    // {
    //   icon:'monitor',
    //   title:'Design & Branding',
    //   desc:'If the distribution of letters and words is random, the reader will not be distracted from making.'
    // },
  ]

}