import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignatureComponent } from './components/signature/signature.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [

  {
    path: 'signature',
    pathMatch: 'full',
    component: SignatureComponent,
  },
  {
    path: 'verification',
    pathMatch: 'full',
    component: VerificationComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
