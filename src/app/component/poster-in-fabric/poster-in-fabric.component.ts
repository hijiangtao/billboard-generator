import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { FabricCanvasComponent } from '../fabric-canvas/fabric-canvas.component';

@Component({
  selector: 'app-poster-in-fabric',
  templateUrl: './poster-in-fabric.component.html',
  styleUrls: ['./poster-in-fabric.component.scss'],
})
export class PosterInFabricComponent implements OnInit {
  billboardForm: FormGroup;
  logoUrl$: BehaviorSubject<string> = new BehaviorSubject('');

  constructor(private sanitizer: DomSanitizer) {}

  @ViewChild('logoPathInput', { static: true }) logoPathInput;

  @ViewChild('childCanvas')
  childCanvas: FabricCanvasComponent;

  ngOnInit(): void {}

  addLogo(): void {
    const fi = this.logoPathInput.nativeElement;
    if (fi.files && fi.files[0]) {
      const fileToUpload = fi.files[0];

      const myReader: FileReader = new FileReader();
      myReader.onloadend = (loadEvent: any) => {
        const result = loadEvent.target.result;
        this.logoUrl$.next(result);
      };
      myReader.readAsDataURL(fileToUpload);
    }
  }

  savePoster() {
    const aLink = document.createElement('a');
    aLink.style.display = 'none';
    aLink.href = this.childCanvas.canvas.toDataURL();
    aLink.download = 'poster.png';
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
  }
}
