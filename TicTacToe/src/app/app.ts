import { Component, signal } from '@angular/core';
import { TicTakToeGame } from './tic-tak-toe-game/tic-tak-toe-game';

@Component({
  selector: 'app-root',
  imports: [TicTakToeGame],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}
