import SondaService from "../services/SondaService.js";

class SondaController {
  sondaService = new SondaService();

  createSonda = async (req, res) => {
    try {
      const { id, temperatura } = req.body;

      const newSonda = await this.sondaService.createSonda(id, temperatura);
      res.status(200).send(newSonda);
    } catch (error) {
      res.status(422).send(error.message);
    }
  };

  getSondas = async (req, res) => {
    try {
      const sondas = await this.sondaService.getSondas();
      res.status(200).send(sondas);
    } catch (error) {
      res.status(422).send(error.message);
    }
  };

  getSondaById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!id) throw error;
      const data = await this.sondaService.getSondaById(id);
      res.status(200).send(data);
    } catch (error) {
      res.status(422).send(error.message);
    }
  };
}

export default SondaController;
