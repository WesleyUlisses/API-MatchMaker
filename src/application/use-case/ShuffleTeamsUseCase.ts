import Team from "../../domain/entities/Team";
import TeamRepository from "../../infrastructure/repositories/TeamRepository";
import Player from "../../domain/entities/Player";
import PlayerRepository from "../../infrastructure/repositories/PlayerRepository";
import { ShuffleService } from "../../domain/services/ShuffleService";

export default class ShuffleTeamsUseCase {

    private teamRepository: TeamRepository;
    private playerRepository: PlayerRepository;
    private shuffleService: ShuffleService;

    constructor() {
        this.teamRepository = new TeamRepository();
        this.playerRepository = new PlayerRepository();
        this.shuffleService = new ShuffleService();
    }

    async execute( playersPerTeam: number ): Promise<Team[]> {
        
        const teams = await this.teamRepository.findAll();
        const players = await this.playerRepository.findAll();

        const shuffledTeams = this.shuffleService.shuffle(players, teams.length, playersPerTeam);

        return shuffledTeams;
    }

}