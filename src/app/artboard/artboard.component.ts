import { Component, OnInit } from '@angular/core';
import { Art } from '../art';
import * as MOCK_ART from '../Mock-art';
import { ArtService } from '../art.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';


@Component({
  selector: 'app-artboard',
  templateUrl: './artboard.component.html',
  styleUrls: ['./artboard.component.sass'],
  animations: [
    trigger(
      'slideInRight',
      [
        transition(
          ':enter', [
            style({ opacity: 1}),
            animate('500ms', style({opacity: 1}))
          ]
        ),
        transition(
          ':leave', [
            style({ 'opacity': 1}),
            animate('500ms', style({ opacity: 0}))
          ]
        )
      ])
  ]
})

export class ArtboardComponent implements OnInit {


  public collection: Art[] = [];
  public online: boolean = true;
  public tiktak: boolean = true;
  private artSubscription: Subscription = null;

  constructor(private artService : ArtService) { }

  ngOnInit() {
    setTimeout(() => {
      this.artSubscription = this.artService.art$.subscribe({
        next: (value) => {
          if (value){

            if (this.collection.length > 0){
              this.collection.push(value);
              this.collection.shift();
            }else{
              this.collection = [value];
            }
        }
      }
      });

    });
  }

}
