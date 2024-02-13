import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-initial-page',
  templateUrl: './initial-page.component.html',
  styleUrls: ['./initial-page.component.scss']
})
export class InitialPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.querySelector(`#${fragment}`);

        if (element) {
          let headerHeight = document.getElementById('header')
          if (headerHeight) {
            let i = headerHeight.clientHeight; // Obtenha a altura do cabeçalho
            let adjustedScrollPosition = element.getBoundingClientRect().top + window.scrollY - i;
            window.scrollTo({top: adjustedScrollPosition, behavior: 'smooth'})
          }
        }
      }
    });
  }
}
