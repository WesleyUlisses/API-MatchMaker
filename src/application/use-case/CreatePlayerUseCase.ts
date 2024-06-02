import Player from "../../domain/entities/Player";
import PlayerService from "../services/PlayerService";
import CreatePlayerDTO from "../dtos/CreatePlayerDTO";

export default class CreatePlayerUseCase {

    private playerService: PlayerService;

    constructor() {
        this.playerService = new PlayerService();
    }

    async execute(playerDto: CreatePlayerDTO): Promise<Player> {

        try {
            console.log(playerDto);

            console.log('CreatePlayerUseCase');

            const player = new Player(
                playerDto.id,
                playerDto.name,
                playerDto.score,
                playerDto.position,
                playerDto.goals,
                playerDto.assists,
                playerDto.yellowCards,
                playerDto.redCards,
                playerDto.teamId,
                playerDto.age
            );

            console.log(player);
            console.log('CreatePlayerUseCase - player created');
            await this.playerService.addPlayer(player);
            return player;
        } catch (error) {
            throw error;
        }

    }

}

