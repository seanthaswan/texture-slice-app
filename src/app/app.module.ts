import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from "@angular/common";
import { ServiceWorkerModule } from "@angular/service-worker";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { ImageUploaderComponent } from "./image-uploader/image-uploader.component";
import { FileSizePipe } from "./shared/pipes/file-size.pipe";
import { CanvasComponent } from "./canvas/canvas.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { AppContainerComponent } from "./app-container/app-container.component";
import { ImageExporterComponent } from "./image-exporter/image-exporter.component";
import { MoreComponent } from "./more/more.component";
import { DonateComponent } from "./donate/donate.component";
import { ContactComponent } from "./contact/contact.component";
import { GithubComponent } from "./github/github.component";
import { WorkspaceComponent } from './workspace/workspace.component';

@NgModule({
  declarations: [
    AppComponent,
    AppContainerComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    ImageUploaderComponent,
    ImageExporterComponent,
    CanvasComponent,
    MoreComponent,
    DonateComponent,
    ContactComponent,
    GithubComponent,
    NotificationsComponent,
    FileSizePipe,
    WorkspaceComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "my-app" }),
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ServiceWorkerModule.register("/../ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
