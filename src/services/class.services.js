export default class Services {
  constructor(dao) {
    this.dao = dao;
  }

  async getAll() {
    try {
      const response = await this.dao.getAll();
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const response = await this.dao.getById(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data) {
    try {
      const response = await this.dao.create(data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      const response = await this.dao.update(id, data);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const response = await this.dao.delete(id);
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
