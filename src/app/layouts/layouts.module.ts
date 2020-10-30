import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardLayoutComponent } from "./dashboard-layout/dashboard-layout.component";
import { routes as DashboardRoutes } from "./dashboard-layout/dashboard-layout.routes";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DashboardLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([...DashboardRoutes]),
    SharedModule,
  ],
})
export class LayoutsModule {}
