import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposMusicalesComponent } from './grupos-musicales.component';

describe('GruposMusicalesComponent', () => {
  let component: GruposMusicalesComponent;
  let fixture: ComponentFixture<GruposMusicalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposMusicalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposMusicalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
