import Match from "../../domain/entities/Match";
import { MatchService } from "../services/MatchService";
import CreateMatchDTO from "../dtos/CreateMatchDTO";

export default class CreateMatchUseCase {

    private matchService: MatchService;

    constructor(matchService: MatchService) {
        this.matchService = matchService;
    }

    async execute(matchDto: CreateMatchDTO): Promise<Match> {

        const match = new Match(
            undefined,
            matchDto.date,
            matchDto.homeTeamId,
            matchDto.awayTeamId,
            matchDto.homeTeamGoals,
            matchDto.awayTeamGoals,
            matchDto.played
        );

        await this.matchService.addMatch(match);
        return match;
    }
}