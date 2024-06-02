export default class Match {

    private id?: number;
    private date: string;
    private homeTeamId: number;
    private awayTeamId: number;
    private homeTeamGoals: number;
    private awayTeamGoals: number;
    private played: boolean;

    constructor(id: number | undefined, date: string, homeTeamId: number, awayTeamId: number, homeTeamGoals: number, awayTeamGoals: number, played: boolean) {
        
        this.id = id;
        this.date = date;
        this.homeTeamId = homeTeamId;
        this.awayTeamId = awayTeamId;
        this.homeTeamGoals = homeTeamGoals;
        this.awayTeamGoals = awayTeamGoals;
        this.played = played;
    }

    public getId(): number {
        return this.id as number;
    }

    public getDate(): string {
        return this.date;
    }

    public getHomeTeamId(): number {
        return this.homeTeamId;
    }

    public getAwayTeamId(): number {
        return this.awayTeamId;
    }

    public getHomeTeamGoals(): number {
        return this.homeTeamGoals;
    }

    public getAwayTeamGoals(): number {
        return this.awayTeamGoals;
    }

    public isPlayed(): boolean {
        return this.played;
    }

    public setHomeTeamGoals(goals: number): void {
        this.homeTeamGoals = goals;
    }

    public setAwayTeamGoals(goals: number): void {
        this.awayTeamGoals = goals;
    }

    public setPlayed(played: boolean): void {
        this.played = played;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setDate(date: string): void {
        this.date = date;
    }

    public setHomeTeamId(homeTeamId: number): void {
        this.homeTeamId = homeTeamId;
    }

    public setAwayTeamId(awayTeamId: number): void {
        this.awayTeamId = awayTeamId;
    }
    
}