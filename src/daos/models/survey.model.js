import { model, Schema } from "mongoose";

const surveyCollection = "surveys";

const surveySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  experience: { type: String, required: true },
  difficulty: { type: String, required: true },
  module: { type: Number, required: true },
  date: { type: String, required: true },
  preferences: { type: [String], required: true },
  vsc: { type: String, required: true },
  comment: { type: String },
});

export const SurveyModel = model(surveyCollection, surveySchema);
