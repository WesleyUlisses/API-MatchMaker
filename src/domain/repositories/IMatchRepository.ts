import Match from "../entities/Match";

export default interface IMatchRepository {
    findAll(): Promise<Match[]>;
    findById(id: number): Promise<Match | null>;
    save(match: Match): Promise<void>;
    delete(match: Match): Promise<void>;
    update(match: Match): Promise<void>;
}