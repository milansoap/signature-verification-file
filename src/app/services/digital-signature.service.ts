import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigitalSignatureService {

  signatureKeySubject: BehaviorSubject<any>;

  constructor() { 
    this.signatureKeySubject = new BehaviorSubject<any>(null);
  }

  signFile(file: File, privateKey: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        // wordarray is converting an data stream of a file and transofrming it into word array. (data structure provided by CryptoJs)
        const wordArray = CryptoJS.lib.WordArray.create(reader.result);
        // hashing
        const hash = CryptoJS.SHA256(wordArray);
        // creating signature with private key and returning it to string 
        const signature = CryptoJS.HmacSHA256(hash, privateKey).toString();
        resolve(signature);
      };
      reader.onerror = error => reject(error);
    });
  }

  verifySignature(file: File, privateKey: string, signature: string): Promise<boolean> {
    return this.signFile(file, privateKey).then(calculatedSignature => calculatedSignature === signature);
  }

  setSignatureKeySubject(parameter) {
    this.signatureKeySubject.next(parameter);
  }

}
