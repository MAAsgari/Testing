import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner-inline/banner-inline.component';
import { BannertemplateComponent } from './bannertemplate/bannertemplate.component';
import { WelcomedependencyComponent } from './welcomedependency/welcomedependency.component';
import { TwainComponentAsyncComponent } from './twain-component-async/twain-component-async.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BannertemplateComponent,
    WelcomedependencyComponent,
    TwainComponentAsyncComponent,
    HighlightDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
