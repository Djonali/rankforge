import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { tns } from 'tiny-slider/src/tiny-slider';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.scss'
})
export class ClientComponent {
  slider: any;

  ngAfterViewInit() {
    const sliderContainer = document.querySelector('.tiny-three-item');
    if (sliderContainer) {
      this.slider = tns({
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      });
    }
  }

  clientData = [
    {
      desc:'" Our website now ranks on page one! We’ve seen a noticeable increase in leads within weeks. "',
      image:'assets/images/team/01.jpg',
      name:'Calvin Carlo',
      title:'Director'
    },
    {
      desc:'" Professional, reliable, and results-driven. They completely transformed our online presence and boosted our local visibility. "',
      image:'assets/images/team/02.jpg',
      name:'Christa Smith',
      title:'Manager'
    },
    {
      desc:'" From design to SEO, everything was seamless. Our site looks amazing and actually brings in customers. "',
      image:'assets/images/team/03.jpg',
      name:'Jemina CLone',
      title:'Vice President'
    },
    {
      desc:'" We finally understand SEO thanks to their team — and we’re seeing more traffic every month. "',
      image:'assets/images/team/04.jpg',
      name:'Smith Vodka',
      title:'Product Manager'
    },
    {
      desc:'"Fast turnaround, clear communication, and real results. Couldn’t ask for a better web and SEO partner."',
      image:'assets/images/team/05.jpg',
      name:'Cristino Murfi',
      title:'Manager'
    },
    {
      desc:'"They delivered exactly what they promised — a clean website that ranks and converts. Highly recommended!"',
      image:'assets/images/team/06.jpg',
      name:'Cristino Murfi',
      title:'Director'
    },
  ]

}
