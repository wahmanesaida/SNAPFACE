import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() facesnap!: FaceSnap //permet de cree des attribut



  snap(){
    if(this.facesnap.Snap=== "Ohh Snap!"){
      this.facesnap.snaps++;
      this.facesnap.Snap="Unsnap!"

    }else{
      this.facesnap.snaps--;
      this.facesnap.Snap="Ohh Snap!";


    }
  }

}
