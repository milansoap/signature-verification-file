import { Component } from '@angular/core';
import { DigitalSignatureService } from 'src/app/services/digital-signature.service';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent {

  file: File | null = null;
  signature: string | null = null;
  privateKey: string | null = null;
  feedbackVariable: string = null;

  constructor(private digitalSignatureService: DigitalSignatureService) { }

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files) {
      this.file = target.files[0];
      this.feedbackVariable = null;
    }
  }

  applySignature(): void {
    if (!this.file || !this.privateKey) return;
    this.digitalSignatureService.signFile(this.file, this.privateKey).then(signature => {
      this.signature = signature;
      this.digitalSignatureService.setSignatureKeySubject(signature);
      this.feedbackVariable = "YOU HAVE SIGNED"
      console.log(signature)
    });
  }

}