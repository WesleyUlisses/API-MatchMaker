import Player from "../../domain/entities/Player";

export default interface CreateTeamDTO {
    //name: string, logo: string, players: Player[], matches: number, wins: number, draws: number, losses: number, goalsFor: number, goalsAgainst: number, goalDifference: number, points: number
    name: string;
    logo: string;
    players: Player[];
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
    points: number;
}