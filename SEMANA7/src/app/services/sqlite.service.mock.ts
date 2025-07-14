export class MockSQLiteService {
  private data: any[] = [];

  async initDB(): Promise<void> {
    this.data = [];
  }

  async addMascota(mascota: any): Promise<void> {
    this.data.push({ id: this.data.length + 1, ...mascota });
  }

  async getMascotas(): Promise<any[]> {
    return this.data;
  }

  async closeConnection(): Promise<void> {
    // nada aquí, es solo un mock
  }
}
