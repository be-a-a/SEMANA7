import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePage } from './detalle.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetallePage', () => {
  let component: DetallePage;
  let fixture: ComponentFixture<DetallePage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallePage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ index: 0 }) // simulación de parámetro
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
