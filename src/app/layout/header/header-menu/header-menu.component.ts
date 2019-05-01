import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  openTabMenu(evt, tabItemId) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-menu-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-menu-item");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabItemId).style.display = "block";
    evt.currentTarget.className += " active";

    document.getElementById('headerAction').style.display = 'none';
    window.addEventListener('click', function (e) {
      if (document.getElementById('headerWrapper').contains(e.target as HTMLTextAreaElement)) {
        document.getElementById('tabContentWrapper').style.display = "flex"
      } else {
        document.getElementById('tabContentWrapper').style.display = "none";
        document.getElementById('headerAction').style.display = "flex";
      }
    });
  }

  closeDropdown() {
    document.getElementById('headerAction').style.display = "flex";
  }
}
