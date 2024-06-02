export default class Player {

    private id?: number;
    private name: string;
    private score: number;
    private position: string;
    private goals: number;
    private assists: number;
    private yellowCards: number;
    private redCards: number;
    private teamId: number;
    private age: number;

    constructor(id: number | undefined, name: string, score: number, position: string, goals: number, assists: number, yellowCards: number, redCards: number, teamId: number, age: number) {
        this.id = id;
        this.name = name;
        this.score = score;
        this.position = position;
        this.goals = goals;
        this.assists = assists;
        this.yellowCards = yellowCards;
        this.redCards = redCards;
        this.teamId = teamId;
        this.age = age;
    }

    public getId(): number {
        return this.id as number;
    }

    public getName(): string {
        return this.name;
    }

    public getScore(): number {
        return this.score;
    }

    public getPosition(): string {
        return this.position;
    }

    public getGoals(): number {
        return this.goals;
    }

    public getAssists(): number {
        return this.assists;
    }

    public getYellowCards(): number {
        return this.yellowCards;
    }

    public getRedCards(): number {
        return this.redCards;
    }

    public getTeamId(): number {
        return this.teamId;
    }

    public getAge(): number {
        return this.age;
    }

    public setScore(score: number): void {
        this.score = score;
    }

    public setPosition(position: string): void {
        this.position = position;
    }

    public setGoals(goals: number): void {
        this.goals = goals;
    }

    public setAssists(assists: number): void {
        this.assists = assists;
    }

    public setYellowCards(yellowCards: number): void {
        this.yellowCards = yellowCards;
    }

    public setRedCards(redCards: number): void {
        this.redCards = redCards;
    }

    public setTeamId(teamId: number): void {
        this.teamId = teamId;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public setAge(age: number): void {
        this.age = age;
    }

    public toString(): string {
        return `Player: ${this.name} - Score: ${this.score} - Position: ${this.position} - Goals: ${this.goals} - Assists: ${this.assists} - Yellow Cards: ${this.yellowCards} - Red Cards: ${this.redCards} - Team ID: ${this.teamId} - Age: ${this.age}`;
    }
}