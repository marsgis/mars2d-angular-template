import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { Mars2dDirective } from './mars2d.directive';

describe('Mars2dDirective', () => {
  it('should create a Mars2d viewer', () => {
    const fixture = TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Mars2dDirective
      ]
    }).createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });
});
