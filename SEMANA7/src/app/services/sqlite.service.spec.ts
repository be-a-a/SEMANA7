import { TestBed } from '@angular/core/testing';
import { MockSQLiteService } from './sqlite.service.mock';

describe('SQLiteService (Mock)', () => {
  let service: MockSQLiteService;

  beforeEach(async () => {
    service = new MockSQLiteService();
    await service.initDB();
  });

  it('debería agregar una mascota correctamente', async () => {
    const mascota = {
      nombre: 'Milo',
      tipo: 'perro',
      raza: 'Labrador',
      color: 'Marrón',
      peso: 10.5,
      altura: 50
    };

    await service.addMascota(mascota);
    const mascotas = await service.getMascotas();

    expect(mascotas.length).toBeGreaterThan(0);
    expect(mascotas[0].nombre).toBe('Milo');
  });
});
