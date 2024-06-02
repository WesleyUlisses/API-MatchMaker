import Team from "../../domain/entities/Team";
import { ITeamService } from "../interfaces/ITeamService";
import TeamRepository from "../../infrastructure/repositories/TeamRepository";

export default class TeamService implements ITeamService {

    private teamRepository: TeamRepository;

    constructor() {
        this.teamRepository = new TeamRepository();
    }

    async getAllTeams(): Promise<Team[]> {
        return this.teamRepository.findAll();
    }

    async getTeamById(id: number): Promise<Team | null> {
        return this.teamRepository.findById(id);
    }

    async addTeam(team: Team): Promise<void> {
        await this.teamRepository.save(team);
    }

    async updateTeam(team: Team): Promise<void> {
        await this.teamRepository.update(team);
    }

    async deleteTeam(team: Team): Promise<void> {
        await this.teamRepository.delete(team);
    }
}