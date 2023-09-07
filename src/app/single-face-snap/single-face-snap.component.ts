import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  btnString! : String;

  constructor(private faceSnapsService: FaceSnapsService, private route : ActivatedRoute){}

  ngOnInit() {
    this.btnString = 'Snap';
    const faceSnapId = +this.route.snapshot.params['id'];
    //Rajouter le "+" au debut transfrome la chaine de caractere en number 
    this.faceSnap = this.faceSnapsService.getFaceSnapId(faceSnapId);
  }
  
  onAddSnap(){

    if (this.btnString === 'Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Snap');
      this.btnString = 'unSnap';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unSnap');
      this.btnString = 'Snap!'
    }
  
  }
}
