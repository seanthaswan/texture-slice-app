import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppContainerComponent } from "./app-container/app-container.component";
import { AppComponent } from "./app.component";
import { CanvasComponent } from "./canvas/canvas.component";
import { ContactComponent } from "./contact/contact.component";
import { DonateComponent } from "./donate/donate.component";
import { GithubComponent } from "./github/github.component";
import { ImageExporterComponent } from "./image-exporter/image-exporter.component";
import { ImageUploaderComponent } from "./image-uploader/image-uploader.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MoreComponent } from "./more/more.component";

const routes: Routes = [
  {
    path: "home",
    component: LandingPageComponent,
  },
  {
    path: "app",
    component: AppContainerComponent,
    children: [
      {
        path: "import",
        component: ImageUploaderComponent,
      },
      {
        path: "export",
        component: ImageExporterComponent,
      },
      {
        path: "stage",
        component: CanvasComponent,
      },
    ],
  },
  {
    path: "more",
    component: MoreComponent,
    children: [
      {
        path: "donate",
        component: DonateComponent,
      },
      {
        path: "contact",
        component: ContactComponent,
      },
      {
        path: "github",
        component: GithubComponent,
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/home",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
