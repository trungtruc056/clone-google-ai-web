import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderActionComponent, HeaderMenuComponent} from "./header";
import {
  MenuGetStartedComponent,
  MenuPricingComponent,
  MenuProductsComponent,
  MenuWhyGoogleComponent
} from "./header/header-menu";
import {MenuSolutionsComponent} from "./header/header-menu/menu-solutions/menu-solutions.component";
import {FooterBottomComponent, FooterMainComponent} from "./footer";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import { HeaderMobileComponent } from './header/header-mobile/header-mobile.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    HeaderActionComponent,
    MenuWhyGoogleComponent,
    MenuSolutionsComponent,
    MenuProductsComponent,
    MenuPricingComponent,
    MenuGetStartedComponent,
    FooterMainComponent,
    FooterBottomComponent,
    HeaderMobileComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]

})
export class LayoutModule {

}
