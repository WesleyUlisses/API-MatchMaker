import Match from '../../domain/entities/Match';

export interface IMatchService {
    getAllMatches(): Promise<Match[]>;
    getMatchById(id: number): Promise<Match | null>;
    addMatch(match: Match): Promise<void>;
    updateMatch(match: Match): Promise<void>;
    deleteMatch(match: Match): Promise<void>;
    generateMatches(): Promise<void>;
}
