import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private sqlite = new SQLiteConnection(CapacitorSQLite);
  private db!: SQLiteDBConnection;

  constructor() {}

  async initDB(): Promise<void> {
    this.db = await this.sqlite.createConnection('petplanner_db', false, 'no-encryption', 1, false);
    await this.db.open();
    await this.createTables();
  }

  private async createTables(): Promise<void> {
    const createMascotas = `
      CREATE TABLE IF NOT EXISTS mascotas (
                                            id INTEGER PRIMARY KEY AUTOINCREMENT,
                                            nombre TEXT,
                                            tipo TEXT,
                                            raza TEXT,
                                            color TEXT,
                                            peso REAL,
                                            altura REAL,
                                            fechaNacimiento TEXT
      );
    `;
    await this.db.execute(createMascotas);
  }

  async addMascota(mascota: any): Promise<void> {
    const { nombre, tipo, raza, color, peso, altura, fechaNacimiento } = mascota;
    const stmt = `
      INSERT INTO mascotas (nombre, tipo, raza, color, peso, altura, fechaNacimiento)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    await this.db.run(stmt, [nombre, tipo, raza, color, peso, altura, fechaNacimiento]);
  }

  async getMascotas(): Promise<any[]> {
    const result = await this.db.query('SELECT * FROM mascotas');
    return result.values ?? [];
  }

  async updateMascota(mascota: any): Promise<void> {
    const { id, nombre, tipo, raza, color, peso, altura, fechaNacimiento } = mascota;
    const stmt = `
      UPDATE mascotas
      SET nombre = ?, tipo = ?, raza = ?, color = ?, peso = ?, altura = ?, fechaNacimiento = ?
      WHERE id = ?
    `;
    await this.db.run(stmt, [nombre, tipo, raza, color, peso, altura, fechaNacimiento, id]);
  }

  async deleteMascota(id: number): Promise<void> {
    await this.db.run(`DELETE FROM mascotas WHERE id = ?`, [id]);
  }

  async closeConnection(): Promise<void> {
    await this.sqlite.closeConnection('petplanner_db', false);
  }
}
