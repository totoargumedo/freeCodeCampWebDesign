import MongoDao from "./mongo.dao.js";
import { SurveyModel } from "./models/survey.model.js";

export default class SurveyMongoDao extends MongoDao {
  constructor() {
    super(SurveyModel);
  }
}
