import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  /* Le décorateur `@Input()` est utilisé pour définir une propriété d'entrée dans un composant
  angulaire. Il permet au composant de recevoir des données de son composant parent. Dans ce cas, la
  propriété `faceSnap` est marquée comme propriété d'entrée, ce qui signifie que le composant parent
  peut lui lier une valeur lors de l'utilisation du composant `app-face-snap`. */
  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;

  btnString! : String;

  constructor(private faceSnapsService: FaceSnapsService, private routes: Router){}

  ngOnInit() {
    this.btnString = 'Snap';
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

  onViewSnap():void{
    this.routes.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
  
}
