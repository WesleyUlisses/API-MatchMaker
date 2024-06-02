import { Request, Response } from 'express';
import CreateTeamDTO from '../../application/dtos/CreateTeamDTO';
import CreateTeamUseCase from '../../application/use-case/CreateTeamUseCase';
import { ErrorHandler } from '../middlewares/ErrorHandler';
import TeamService from '../../application/services/TeamService';

export default class TeamController {

    private createTeamUseCase: CreateTeamUseCase;
    private teamService: TeamService;
    constructor() {

        this.teamService = new TeamService();
        this.createTeamUseCase = new CreateTeamUseCase(this.teamService);
    }

    async createTeam(req: Request, res: Response): Promise<Response | undefined> {

        try {

            const { name, logo, players, matches, wins, draws, losses, goalsFor, goalsAgainst, goalDifference, points } = req.body;

            if (!name || !players) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            const createTeamData: CreateTeamDTO = {
                name,
                logo,
                players,
                matches,
                wins,
                draws,
                losses,
                goalsFor,
                goalsAgainst,
                goalDifference,
                points
            };

            const createdTeam = await this.createTeamUseCase.execute(createTeamData);

            return res.status(201).json(createdTeam);

        } catch (error) {
            ErrorHandler.handle(error as Error, req, res);
        }


    }
}