import { Component, OnInit } from '@angular/core';
import { Art } from '../art';
import * as MOCK_ART from '../Mock-art';
import { ArtService } from '../art.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-artboard',
  templateUrl: './artboard.component.html',
  styleUrls: ['./artboard.component.sass']
})

export class ArtboardComponent implements OnInit {

  private arts : Art[] = MOCK_ART.mock_response;

  public collection: [Art, Art] = [this.arts[0], this.arts[1]];
  public online: boolean = true;
  public tiktak: boolean = true;
  private artSubscription: Subscription = null;

  constructor(private artService : ArtService) { }

  ngOnInit() {
    setTimeout(() => {
      this.artSubscription = this.artService.art$.subscribe({
        next: (value) => {
          if (value){

            if (this.tiktak){
              this.collection[0] = (value);
            }else{
              this.collection[1] = (value)
            }
            this.tiktak = !this.tiktak;
        }
      }
      });

    });
  }

}
