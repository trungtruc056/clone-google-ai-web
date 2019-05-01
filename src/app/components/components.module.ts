import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {ComponentsComponent} from "./components.component";
import { MainContentComponent } from './main-content/main-content.component';
import {OverviewComponent} from "./main-content/overview/overview.component";
import {VisionApiDemoComponent} from "./main-content/vision-api-demo/vision-api-demo.component";
import {BenefitsComponent} from "./main-content/benefits/benefits.component";
import {FeaturesComponent} from "./main-content/features/features.component";
import {CustomersComponent} from "./main-content/customers/customers.component";
import {UseCasesComponent} from "./main-content/use-cases/use-cases.component";
import {PricingComponent} from "./main-content/pricing/pricing.component";
import {ResourcesComponent} from "./main-content/resources/resources.component";
import {TraningComponent} from "./main-content/traning/traning.component";
import {GetStartedComponent} from "./main-content/get-started/get-started.component";

@NgModule({
  declarations: [
    ComponentsComponent,
    SidebarComponent,
    MainContentComponent,
    OverviewComponent,
    VisionApiDemoComponent,
    BenefitsComponent,
    FeaturesComponent,
    CustomersComponent,
    UseCasesComponent,
    PricingComponent,
    ResourcesComponent,
    TraningComponent,
    GetStartedComponent
  ],
  exports: [
    ComponentsComponent
  ],
  imports: [
    CommonModule
  ]

})
export class ComponentsModule {

}
