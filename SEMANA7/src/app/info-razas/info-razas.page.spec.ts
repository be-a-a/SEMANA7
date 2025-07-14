import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoRazasPage } from './info-razas.page';
import { HttpClientModule } from '@angular/common/http';

describe('InfoRazasPage', () => {
  let component: InfoRazasPage;
  let fixture: ComponentFixture<InfoRazasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRazasPage],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoRazasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
