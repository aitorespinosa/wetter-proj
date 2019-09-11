import { Component, OnInit } from '@angular/core';
import { Art } from '../art';
import * as MOCK_ART from '../Mock-art';


@Component({
  selector: 'app-artboard',
  templateUrl: './artboard.component.html',
  styleUrls: ['./artboard.component.sass']
})

export class ArtboardComponent implements OnInit {

  private arts : Art[] = MOCK_ART.mock_response;

  public collection: [Art, Art] = [this.arts[0], this.arts[1]];
  public online: boolean = true;
  public ticktack: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
