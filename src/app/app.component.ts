import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  arrayfacesnap!: FaceSnap[]

  ngOnInit(): void {

    this.arrayfacesnap=[
      {
        title: "Saida",
        description:"software engineering Student",
        CreatedDate: new Date(),
        snaps: 200,
        imageUrl:"https://mcdn.wallpapersafari.com/medium/89/80/fPkvI6.jpg",
        Snap:"Ohh Snap!",
        Location:"paris"
      },
      {
        title: "Flower",
        description:"pretty flower",
        CreatedDate: new Date(),
        snaps: 1,
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flower-IMG_0314.JPG/1200px-Flower-IMG_0314.JPG?20080926133941",
        Snap:"Ohh Snap!"
      }

    ];


  }
}
