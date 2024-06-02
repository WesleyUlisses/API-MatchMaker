import Team from "../entities/Team";

export default interface ITeamRepository {
    findAll(): Promise<Team[]>;
    findById(id: number): Promise<Team | null>;
    save(team: Team): Promise<void>;
    delete(team: Team): Promise<void>;
    update(team: Team): Promise<void>;
}