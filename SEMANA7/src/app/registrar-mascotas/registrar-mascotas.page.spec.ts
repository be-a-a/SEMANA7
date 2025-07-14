import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarMascotasPage } from './registrar-mascotas.page';

describe('RegistrarMascotasPage', () => {
  let component: RegistrarMascotasPage;
  let fixture: ComponentFixture<RegistrarMascotasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMascotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
