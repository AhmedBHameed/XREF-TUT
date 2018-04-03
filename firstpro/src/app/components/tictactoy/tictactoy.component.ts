import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tictactoy',
  templateUrl: './tictactoy.component.html',
  styleUrls: ['./tictactoy.component.css']
})
export class TictactoyComponent implements OnInit {
  randomNum: number;
  colors: Array<string>;
  constructor(private el: ElementRef) { }

  ngOnInit() {
  }
  paint(row: number, col: number): void {
    this.colors = ['X', 'O'];
    this.randomNum = Math.round(Math.random());
    this.el.nativeElement.querySelector('.square-' + row + '-' + col).classList.add( this.colors[this.randomNum] );
  }

}
