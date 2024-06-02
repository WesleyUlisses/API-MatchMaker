import { Router } from "express";
import MatchController from "../controllers/MatchController";
import exp from "constants";

const matchController = new MatchController();
const matchRoutes = Router();

// POST /matches
matchRoutes.post('/matches', matchController.createMatch);

export default matchRoutes;