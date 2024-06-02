export default interface CreatePlayerDTO {
    id?: number;
    name: string;
    score: number;
    position: string;
    goals: number;
    assists: number;
    yellowCards: number;
    redCards: number;
    teamId: number;
    age: number;
}