import Player from "../entities/Player";

export default interface IPlayerRepository {
    findAll(): Promise<Player[]>;
    findById(id: number): Promise<Player | null>;
    save(player: Player): Promise<void>;
    delete(player: Player): Promise<void>;
    update(player: Player): Promise<void>;
}