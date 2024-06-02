import Player from "../../domain/entities/Player";
import { IPlayerService } from "../interfaces/IPlayerService";
import PlayerRepository from "../../infrastructure/repositories/PlayerRepository";

export default class PlayerService implements IPlayerService {
    
    private playerRepository: PlayerRepository;

    constructor() {
        this.playerRepository = new PlayerRepository();
    }

    async getAllPlayers(): Promise<Player[]> {
        return this.playerRepository.findAll();
    }

    async getPlayerById(id: number): Promise<Player | null> {
        return this.playerRepository.findById(id);
    }

    async addPlayer(player: Player): Promise<void> {
        await this.playerRepository.save(player);
    }

    async updatePlayer(player: Player): Promise<void> {
        await this.playerRepository.update(player);
    }

    async deletePlayer(player: Player): Promise<void> {
        await this.playerRepository.delete(player);
    }
}