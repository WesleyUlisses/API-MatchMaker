import Team from '../../domain/entities/Team';

export interface ITeamService {
    getAllTeams(): Promise<Team[]>;
    getTeamById(id: number): Promise<Team | null>;
    addTeam(team: Team): Promise<void>;
    updateTeam(team: Team): Promise<void>;
    deleteTeam(team: Team): Promise<void>;
}
