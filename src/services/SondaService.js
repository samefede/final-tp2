import Sonda from "../Model/Sonda.js";
const TEMPERATURA_MINIMA = -20;
const TEMPERATURA_MAXIMA = 100;
const ID_MINIMO = 1;
const ID_MAXIMO = 5;


class SondaService {
  constructor() {
    this.datosSondas = [];
  }

  createSonda = async (id, temperatura) => {
    if (id < ID_MINIMO || id > ID_MAXIMO || temperatura < TEMPERATURA_MINIMA || temperatura > TEMPERATURA_MAXIMA) {
      throw new Error("Datos no válidos");
    }
    const nuevaSonda = new Sonda(id, temperatura);
    this.datosSondas.push(nuevaSonda);
    return nuevaSonda;
  };

  getSondas = async () => {
    return this.datosSondas;
  };

  getSondaById = async (id) => {
    if (id < ID_MINIMO || id > ID_MAXIMO) {
      throw new Error("Número de sonda incorrecto");
    }

    const sonda = await this.datosSondas.filter((sonda) => sonda.id == id);

    if (sonda.length == 0) {
      throw new Error("Sonda no encontrada");
    }

    return sonda;
  };
}

export default SondaService;
