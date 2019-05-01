import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    $(".btn-nav").on("click tap", function () {
      $(".nav-container").toggleClass("showNav hideNav").removeClass("hidden");
      $(this).toggleClass("animated");
    });
  }
}
