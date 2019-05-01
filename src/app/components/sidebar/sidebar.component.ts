import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let x = window.matchMedia("(max-width: 1279px)")
    this.responsiveFunc(x); // Call listener function at run time
    x.addListener(this.responsiveFunc) // Attach listener function on state changes

    window.addEventListener('click', function (e) {
      if (!document.getElementById('sidebarMenu').contains(e.target as HTMLTextAreaElement)) {
        document.getElementById('sidebarMenuList').classList.remove("show");
      }
    });
  }

  responsiveFunc(x) {
    if (x.matches) { // If media query matches
      document.getElementById('sidebarMenu').classList.add('responsive');
    } else {
      document.getElementById('sidebarMenuList').classList.add("show");
      document.getElementById('sidebarMenu').classList.remove('responsive');
    }
  }

  sidebarDropdown() {
    let elm = document.getElementById('sidebarMenuList').classList.toggle("show");
  }
}
