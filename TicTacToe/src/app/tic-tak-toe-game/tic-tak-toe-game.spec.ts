import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTakToeGame } from './tic-tak-toe-game';

describe('TicTakToeGame', () => {
  let component: TicTakToeGame;
  let fixture: ComponentFixture<TicTakToeGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicTakToeGame]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicTakToeGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
