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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    ImageUploaderComponent,
    CanvasComponent,
    NotificationsComponent,
    FileSizePipe,
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
