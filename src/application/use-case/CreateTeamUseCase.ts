import Team from "../../domain/entities/Team";
import TeamService from "../services/TeamService";
import CreateTeamDTO from "../dtos/CreateTeamDTO";

export default class CreateTeamUseCase {

    private teamService: TeamService;

    constructor(teamService: TeamService) {
        this.teamService = teamService;
    }

    async execute(teamDto: CreateTeamDTO): Promise<Team> {

        const team = new Team(
            undefined,
            teamDto.name,
            teamDto.logo,
            teamDto.players,
            teamDto.matches,
            teamDto.wins,
            teamDto.draws,
            teamDto.losses,
            teamDto.goalsFor,
            teamDto.goalsAgainst,
            teamDto.goalDifference,
            teamDto.points
        );
        await this.teamService.addTeam(team);
        return team;
        
    }
}