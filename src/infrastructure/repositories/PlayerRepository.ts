import Player from '../../domain/entities/Player';
import IPlayerRepository from '../../domain/repositories/IPlayerRepository';
import PlayerModel from '../models/PlayerModel';

export default class PlayerRepository implements IPlayerRepository {


    constructor() {

    }

    async findAll(): Promise<Player[]> {

        try {
            const playerModels: PlayerModel[] = await PlayerModel.findAll();

            const players: Player[] = playerModels.map(playerModel => {

                return new Player(
                    playerModel.id,
                    playerModel.name,
                    playerModel.score,
                    playerModel.position,
                    playerModel.goals,
                    playerModel.assists,
                    playerModel.yellowCards,
                    playerModel.redCards,
                    playerModel.teamId,
                    playerModel.age
                );
            });

            return players;

        } catch (error) {
            throw new Error('Players not found');
        }

    }

    async findById(id: number): Promise<Player | null> {

        try {
            const playerModel = await PlayerModel.findByPk(id);

            if (playerModel) {
                return new Player(
                    playerModel.id,
                    playerModel.name,
                    playerModel.score,
                    playerModel.position,
                    playerModel.goals,
                    playerModel.assists,
                    playerModel.yellowCards,
                    playerModel.redCards,
                    playerModel.teamId,
                    playerModel.age
                );
            }

            return null;

        } catch (error) {
            throw new Error(`Player with ID ${id} not found.`);
        }

    }

    async save(player: Player): Promise<void> {

        try {
            await PlayerModel.create({
                name: player.getName(),
                score: player.getScore(),
                position: player.getPosition(),
                goals: player.getGoals(),
                assists: player.getAssists(),
                yellowCards: player.getYellowCards(),
                redCards: player.getRedCards(),
                teamId: player.getTeamId(),
                age: player.getAge()
            });

        } catch (error) {
            throw new Error('Player could not be created');
        }


    }

    async update(player: Player): Promise<void> {

        try {
            await PlayerModel.update({
                name: player.getName(),
                score: player.getScore(),
                position: player.getPosition(),
                goals: player.getGoals(),
                assists: player.getAssists(),
                yellowCards: player.getYellowCards(),
                redCards: player.getRedCards(),
                teamId: player.getTeamId(),
                age: player.getAge()
            }, {
                where: {
                    id: player.getId()
                }
            });

        } catch (error) {
            throw new Error('Player could not be updated');
        }


    }

    async delete(player: Player): Promise<void> {

        try {
            await PlayerModel.destroy({
                where: {
                    id: player.getId()
                }
            });

        } catch (error) {
            throw new Error(`Player with ID ${player.getId()} not found.`);
        }
    }
}
