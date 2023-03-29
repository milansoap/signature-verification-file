import { Component } from '@angular/core';
import { DigitalSignatureService } from 'src/app/services/digital-signature.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {

  file: File | null = null;
  signature: string;
  privateKey: string | null = null;
  isSignatureValid: boolean | null = null;
  publicKey: string | null = null;


  constructor(private digitalSignatureService: DigitalSignatureService) { }

  ngOnInit(): void {
    this.digitalSignatureService.signatureKeySubject.subscribe(signature =>{
      this.signature = signature
    })
  }

  verifySignature(): void {
    if (!this.file || !this.publicKey || !this.signature) return;
    this.digitalSignatureService.verifySignature(this.file, this.publicKey, this.signature).then(isValid => {
      this.isSignatureValid = isValid;
    });
  }
  

}
