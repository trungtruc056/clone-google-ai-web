import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-component',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    $(window).scroll(function () {
      const maxHeight = $('.sidebar-block');
      const pxToTop = $(window).scrollTop();
      const elmToTop = $('#getStarted').position().top - 210;
      if (pxToTop > elmToTop) {
        maxHeight.css('max-height', 0);
      } else {
        maxHeight.css('max-height', elmToTop - pxToTop);
      }
    });

    //Resize function
    let maxHeight = $('.sidebar-block');
    const pxToTop = $(window).scrollTop();
    const elmToTop = $('#getStarted').position().top - 210;
    $(document).ready(function () {
      $(window).resize(function () {
        let resizeValue = $(window).height();
        if (resizeValue < 610) {
          maxHeight.css('max-height', resizeValue - 250);
        } else {
          maxHeight.css('max-height', elmToTop - pxToTop);
        }
      });
    });

    $(document).ready(function () {
      $('a[href^="#"]').bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        let target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
          scrollTop: $(target).offset().top
        }, 600, function () {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
      });
    });

    $(window).scroll(function () {
      let scrollDistance = $(window).scrollTop();

      // Show/hide menu on scroll
      //if (scrollDistance >= 850) {
      //		$('nav').fadeIn("fast");
      //} else {
      //		$('nav').fadeOut("fast");
      //}

      //Default active

      if (scrollDistance < 50) {
        $('.sidebar-menu-list a').first().addClass('active');
      }

      // Assign active class to nav links while scolling
      $('.page-section').each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $('.sidebar-menu-list a.active').removeClass('active');
          $('.sidebar-menu-list a').eq(i).addClass('active');
        }
      });
    }).scroll();
  }
}
