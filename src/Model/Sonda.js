class Sonda {
  constructor(id, temperatura) {
    this.id = id;
    this.temperatura = temperatura;
    this.timestamp = new Date().toISOString();
  }
}

export default Sonda;
