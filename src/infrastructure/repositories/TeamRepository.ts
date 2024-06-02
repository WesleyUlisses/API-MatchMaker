import Team from "../../domain/entities/Team";
import ITeamRepository from "../../domain/repositories/ITeamRepository";
import TeamModel from "../models/TeamModel";

export default class TeamRepository implements ITeamRepository {

    constructor() {
    }
    async findAll(): Promise<Team[]> {

        try {

            const teamModels = await TeamModel.findAll();
            const teams = teamModels.map(teamModel => {
                return new Team(
                    teamModel.id,
                    teamModel.name,
                    teamModel.logo,
                    teamModel.playersList,
                    teamModel.matches,
                    teamModel.wins,
                    teamModel.draws,
                    teamModel.losses,
                    teamModel.goalsFor,
                    teamModel.goalsAgainst,
                    teamModel.goalDifference,
                    teamModel.points,
                );
            });

            return teams;

        } catch (error) {
            throw new Error('Teams not found');
        }

    }

    async findById(id: number): Promise<Team | null> {

        try {
            const teamModel = await TeamModel.findByPk(id);

            if (teamModel) {
                return new Team(
                    teamModel.id,
                    teamModel.name,
                    teamModel.logo,
                    teamModel.playersList,
                    teamModel.matches,
                    teamModel.wins,
                    teamModel.draws,
                    teamModel.losses,
                    teamModel.goalsFor,
                    teamModel.goalsAgainst,
                    teamModel.goalDifference,
                    teamModel.points,
                );
            }

            return null;

        } catch (error) {
            throw new Error(`Team with ID ${id} not found.`);
        }
    }

    async save(team: Team): Promise<void> {
        try {

            await TeamModel.create({
                name: team.getName(),
                logo: team.getLogo(),
                playersList: team.getPlayers(),
                matches: team.getMatches(),
                wins: team.getWins(),
                draws: team.getDraws(),
                losses: team.getLosses(),
                goalsFor: team.getGoalsFor(),
                goalsAgainst: team.getGoalsAgainst(),
                goalDifference: team.getGoalDifference(),
                points: team.getPoints(),
            });

        } catch (error) {
            throw new Error('Team not saved');
        }
    }

    async update(team: Team): Promise<void> {
        try {

            await TeamModel.update({
                name: team.getName(),
                logo: team.getLogo(),
                playersList: team.getPlayers(),
                matches: team.getMatches(),
                wins: team.getWins(),
                draws: team.getDraws(),
                losses: team.getLosses(),
                goalsFor: team.getGoalsFor(),
                goalsAgainst: team.getGoalsAgainst(),
                goalDifference: team.getGoalDifference(),
                points: team.getPoints(),
            }, {
                where: {
                    id: team.getId(),
                },
            });

        } catch (error) {
            throw new Error(`Team with ID ${team.getId()} not found.`);
        }
    }

    async delete(team: Team): Promise<void> {
        try {

            await TeamModel.destroy({
                where: {
                    id: team.getId(),
                },
            });

        } catch (error) {
            throw new Error(`Team with ID ${team.getId()} not found.`);
        }
    }

    async saveAll(teams: Team[]): Promise<void> {
        try {
            await TeamModel.bulkCreate(teams.map(team => {
                return {
                    name: team.getName(),
                    logo: team.getLogo(),
                    playersList: team.getPlayers(),
                    matches: team.getMatches(),
                    wins: team.getWins(),
                    draws: team.getDraws(),
                    losses: team.getLosses(),
                    goalsFor: team.getGoalsFor(),
                    goalsAgainst: team.getGoalsAgainst(),
                    goalDifference: team.getGoalDifference(),
                    points: team.getPoints(),
                };
            }));

        } catch (error) {
            throw new Error('Teams not saved');
        }
    }

}