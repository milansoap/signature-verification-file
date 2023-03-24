import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignatureComponent } from './components/signature/signature.component';
import { VerificationComponent } from './components/verification/verification.component';
import { SwitcherComponent } from './components/switcher/switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    SignatureComponent,
    VerificationComponent,
    SwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
