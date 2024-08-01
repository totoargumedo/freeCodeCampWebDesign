import Services from "./class.services.js";
import SurveyMongoDao from "../daos/survey.dao.js";
const surveyDao = new SurveyMongoDao();

export default class SurveyServices extends Services {
  constructor() {
    super(surveyDao);
  }
}
