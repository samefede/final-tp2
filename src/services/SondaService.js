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
      const error = new Error("Datos no válidos");
      error.statusCode = 400;
      throw error;
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
      const error = new Error("Número de sonda incorrecto");
      error.statusCode = 400;
      throw error;
    }

    const sonda = await this.datosSondas.filter((sonda) => sonda.id == id);

    if (sonda.length == 0) {
      const error = new Error("Sonda no encontrada");
      error.statusCode = 404;
      throw error;
    }

    return sonda;
  };
}

export default SondaService;
