import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from "./sidebar/sidebar.component";
import {OverviewComponent} from "./overview/overview.component";
import {VisionApiDemoComponent} from "./vision-api-demo/vision-api-demo.component";
import {BenefitsComponent} from "./benefits/benefits.component";
import {FeaturesComponent} from "./features/features.component";
import {CustomersComponent} from "./customers/customers.component";
import {UseCasesComponent} from "./use-cases/use-cases.component";
import {PricingComponent} from "./pricing/pricing.component";
import {ResourcesComponent} from "./resources/resources.component";
import {TraningComponent} from "./traning/traning.component";
import {GetStartedComponent} from "./get-started/get-started.component";
import {ComponentsComponent} from "./components.component";

@NgModule({
  declarations: [
    ComponentsComponent,
    SidebarComponent,
    OverviewComponent,
    VisionApiDemoComponent,
    BenefitsComponent,
    FeaturesComponent,
    CustomersComponent,
    UseCasesComponent,
    PricingComponent,
    ResourcesComponent,
    TraningComponent,
    GetStartedComponent,
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
