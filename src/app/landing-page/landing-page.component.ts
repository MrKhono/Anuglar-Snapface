import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit{

  constructor(private routes: Router){}

  ngOnInit(): void {
    
  }

  onContinue(): void{
    // Autre façon de rediriger ou d'utiliser les liens dans le cas d'un boutton ==> integégrer la route dans le constructeur dans une variable
    this.routes.navigateByUrl('facesnaps');
  }



}
