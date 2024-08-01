import { Router } from "express";
import SurveyServices from "../services/survey.services.js";
const surveyServices = new SurveyServices();

const router = Router();

//VISTAS
router.get("/", (req, res) => {
  res.render("home", { stylesheet: "/css/home.css" });
});
router.get("/survey", (req, res) => {
  res.render("survey-form", { stylesheet: "/css/survey-form.css" });
});
router.get("/survey-ok", (req, res) => {
  res.render("survey-ok", { stylesheet: "/css/survey-ok.css" });
});
router.get("/404", (req, res) => {
  res.render("404", { stylesheet: "/css/404.css" });
});
//API
router.post("/api/survey", async (req, res) => {
  try {
    const data = await surveyServices.create(req.body);
    res.status(201).send("ok");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
router.get("/api/survey", async (req, res) => {
  try {
    const data = await surveyServices.getAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

export default router;
