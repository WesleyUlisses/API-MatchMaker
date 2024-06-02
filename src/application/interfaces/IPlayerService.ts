import Player from '../../domain/entities/Player';

export interface IPlayerService {
    getAllPlayers(): Promise<Player[]>;
    getPlayerById(id: number): Promise<Player | null>;
    addPlayer(player: Player): Promise<void>;
    updatePlayer(player: Player): Promise<void>;
    deletePlayer(player: Player): Promise<void>;
}
