import Player from "./Player";

export default class Team {
    private id?: number;
    private name: string;
    private logo: string;
    private players: Player[];
    private matches: number;
    private wins: number;
    private draws: number;
    private losses: number;
    private goalsFor: number;
    private goalsAgainst: number;
    private goalDifference: number;
    private points: number;

    constructor(id: number | undefined, name: string, logo: string, players: Player[], matches: number, wins: number, draws: number, losses: number, goalsFor: number, goalsAgainst: number, goalDifference: number, points: number) {
        
        this.id = id;
        this.name = name;
        this.logo = logo;
        this.players = players;
        this.matches = matches;
        this.wins = wins;
        this.draws = draws;
        this.losses = losses;
        this.goalsFor = goalsFor;
        this.goalsAgainst = goalsAgainst;
        this.goalDifference = goalDifference;
        this.points = points;
    }

    public getId(): number {
        return this.id as number;
    }

    public getName(): string {
        return this.name;
    }

    public getLogo(): string {
        return this.logo;
    }

    public getPlayers(): Player[] {
        return this.players;
    }

    public getMatches(): number {
        return this.matches;
    }

    public getWins(): number {
        return this.wins;
    }

    public getDraws(): number {
        return this.draws;
    }

    public getLosses(): number {
        return this.losses;
    }

    public getGoalsFor(): number {
        return this.goalsFor;
    }

    public getGoalsAgainst(): number {
        return this.goalsAgainst;
    }

    public getGoalDifference(): number {
        return this.goalDifference;
    }

    public getPoints(): number {
        return this.points;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }

    public setPlayers(players: Player[]): void {
        this.players = players;
    }

    public setMatches(matches: number): void {
        this.matches = matches;
    }

    public setWins(wins: number): void {
        this.wins = wins;
    }

    public setDraws(draws: number): void {
        this.draws = draws;
    }

    public setLosses(losses: number): void {
        this.losses = losses;
    }

    public setGoalsFor(goalsFor: number): void {
        this.goalsFor = goalsFor;
    }

    public setGoalsAgainst(goalsAgainst: number): void {
        this.goalsAgainst = goalsAgainst;
    }

    public setGoalDifference(goalDifference: number): void {
        this.goalDifference = goalDifference;
    }

    public setPoints(points: number): void {
        this.points = points;
    }

    public toString(): string {
        return `
            Team: ${this.name},
            Logo: ${this.logo},
            Players: ${this.players},
            Matches: ${this.matches},
            Wins: ${this.wins},
            Draws: ${this.draws},
            Losses: ${this.losses},
            Goals For: ${this.goalsFor},
            Goals Against: ${this.goalsAgainst},
            Goal Difference: ${this.goalDifference},
            Points: ${this.points}
            `;
    }
}