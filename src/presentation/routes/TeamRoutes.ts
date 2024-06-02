import { Router } from "express";
import TeamController from "../controllers/TeamController";

const teamController = new TeamController();
const teamRoutes = Router();

// POST /teams
teamRoutes.post('/teams', teamController.createTeam);

export default teamRoutes;