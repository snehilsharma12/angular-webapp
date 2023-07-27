import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInfoModalComponent } from './movie-info-modal.component';

describe('MovieInfoModalComponent', () => {
  let component: MovieInfoModalComponent;
  let fixture: ComponentFixture<MovieInfoModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieInfoModalComponent]
    });
    fixture = TestBed.createComponent(MovieInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
