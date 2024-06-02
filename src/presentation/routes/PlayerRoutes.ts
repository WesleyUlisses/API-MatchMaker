import { Router } from "express";
import PlayerController from "../controllers/PlayerController";
import CreatePlayerUseCase from "../../application/use-case/CreatePlayerUseCase";

const playerController = new PlayerController();
const playerRoutes = Router();

// POST /players
playerRoutes.post('/players', playerController.createPlayer);

export default playerRoutes;