import { Request, Response } from 'express';
import CreateMatchDTO from '../../application/dtos/CreateMatchDTO';
import CreateMatchUseCase from '../../application/use-case/CreateMatchUseCase';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import { MatchService } from '../../application/services/MatchService';

export default class MatchController {

    private createMatchUseCase: CreateMatchUseCase;
    private matchService: MatchService;
    constructor() {

        this.matchService = new MatchService();
        this.createMatchUseCase = new CreateMatchUseCase(this.matchService);
    }

    async createMatch(req: Request, res: Response): Promise<Response | undefined> {

        try {

            const { homeTeamId, awayTeamId } = req.body;

            if (!homeTeamId || !awayTeamId ) {
                return res.status(400).json({ message: 'Invalid input' });
            }

            const createMatchData: CreateMatchDTO = {
                date: new Date().toISOString(),
                homeTeamId: homeTeamId,
                awayTeamId: awayTeamId,
                homeTeamGoals: 0,
                awayTeamGoals: 0,
                played: false
            };

            const createdMatch = await this.createMatchUseCase.execute(createMatchData);

            return res.status(201).json(createdMatch);

        } catch (error) {
            ErrorHandler.handle(error as Error, req, res);
        }
    }
}