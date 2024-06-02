export default interface CreateMatchDTO {
    date: string;
    homeTeamId: number;
    awayTeamId: number;
    homeTeamGoals: number;
    awayTeamGoals: number;
    played: boolean;
}