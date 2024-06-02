import { Request, Response } from 'express';
import CreatePlayerDTO from '../../application/dtos/CreatePlayerDTO';
import CreatePlayerUseCase from '../../application/use-case/CreatePlayerUseCase';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import PlayerService from '../../application/services/PlayerService';

export default class PlayerController {
    
    private createPlayerUseCase: CreatePlayerUseCase;
    
    constructor() {
        this.createPlayerUseCase = new CreatePlayerUseCase();
    }

    async createPlayer(req: Request, res: Response): Promise<Response | undefined> {

        try {

            const {id, name, position, age, teamId, score } = req.body;

            console.log(req.body);

            if (!name || !age || !score) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const createPlayerData: CreatePlayerDTO = {
                id,
                name,
                position,
                age,
                teamId,
                score,
                goals: 0,
                assists: 0,
                yellowCards: 0,
                redCards: 0
            };

            console.log(createPlayerData);

            const createdPlayer = await this.createPlayerUseCase.execute(createPlayerData);
            return res.status(201).json(createdPlayer);
        } catch (error) {
            ErrorHandler.handle(error as Error, req, res);
        }
    }
}