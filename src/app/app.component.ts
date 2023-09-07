import { Component,  Input,  OnInit, ViewChild } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  
  interval$! : Observable<number>;

  ngOnInit() {
    
    this.interval$ = interval(1000).pipe(
      map(value => value * 10),
    );
  }

}
