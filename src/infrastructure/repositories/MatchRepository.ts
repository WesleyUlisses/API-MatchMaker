import Match from "../../domain/entities/Match";
import IMatchRepository from "../../domain/repositories/IMatchRepository";
import MatchModel from "../models/MatchModel";

export default class MatchRepository implements IMatchRepository {

    constructor() {}

    async findAll(): Promise<Match[]> {

        try {
            const matchModels: MatchModel[] = await MatchModel.findAll();

            const matches: Match[] = matchModels.map(matchModel => {
                return new Match(
                    matchModel.id,
                    matchModel.date,
                    matchModel.homeTeamId,
                    matchModel.awayTeamId,
                    matchModel.homeTeamGoals,
                    matchModel.awayTeamGoals,
                    matchModel.played
                );
            });

            return matches;

        } catch (error) {
            throw new Error('Matches not found');
        }

    }

    async findById(id: number): Promise<Match | null> {

        try {
            const matchModel = await MatchModel.findByPk(id);

            if (matchModel) {
                return new Match(
                    matchModel.id,
                    matchModel.date,
                    matchModel.homeTeamId,
                    matchModel.awayTeamId,
                    matchModel.homeTeamGoals,
                    matchModel.awayTeamGoals,
                    matchModel.played
                );
            }

            return null;

        } catch (error) {
            throw new Error('Match not found');
        }
    }

    async save(match: Match): Promise<void> {
        try {
            await MatchModel.create({
                date: match.getDate(),
                homeTeamId: match.getHomeTeamId(),
                awayTeamId: match.getAwayTeamId(),
                homeTeamGoals: match.getHomeTeamGoals(),
                awayTeamGoals: match.getAwayTeamGoals(),
                played: match.isPlayed()
            });

        } catch (error) {
            throw new Error('Error saving match');
        }
    }

    async update(match: Match): Promise<void> {
        try {
            await MatchModel.update({
                date: match.getDate(),
                homeTeamId: match.getHomeTeamId(),
                awayTeamId: match.getAwayTeamId(),
                homeTeamGoals: match.getHomeTeamGoals(),
                awayTeamGoals: match.getAwayTeamGoals(),
                played: match.isPlayed()
            }, {
                where: {
                    id: match.getId()
                }
            });

        } catch (error) {
            throw new Error('Error updating match');
        }
    }

    async delete(match: Match): Promise<void> {
        try {
            await MatchModel.destroy({
                where: {
                    id: match.getId()
                }
            });

        } catch (error) {
            throw new Error('Error deleting match');
        }
    }

    async saveAll(matches: Match[]): Promise<void> {
        try {
            await MatchModel.bulkCreate(matches.map(match => {
                return {
                    date: match.getDate(),
                    homeTeamId: match.getHomeTeamId(),
                    awayTeamId: match.getAwayTeamId(),
                    homeTeamGoals: match.getHomeTeamGoals(),
                    awayTeamGoals: match.getAwayTeamGoals(),
                    played: match.isPlayed()
                };
            }));

        } catch (error) {
            throw new Error('Error saving matches');
        }
    }
}