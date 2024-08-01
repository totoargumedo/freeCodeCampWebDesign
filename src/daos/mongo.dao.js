export default class MongoDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      const data = await this.model.find();
      if (!data) {
        throw new Error("Data not found");
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const data = await this.model.findById(id);
      if (!data) {
        throw new Error("Data not found");
      }
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data) {
    try {
      const newData = new this.model(data);
      const savedData = await newData.save();
      return savedData;
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(id, data) {
    try {
      const updatedData = await this.model.findByIdAndUpdate(id, data, {
        new: true,
      });
      if (!updatedData) {
        throw new Error("Data not found");
      }
      return updatedData;
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      const deletedData = await this.model.findByIdAndDelete(id);
      if (!deletedData) {
        throw new Error("Data not found");
      }
      return deletedData;
    } catch (error) {
      throw new Error(error);
    }
  }
}
