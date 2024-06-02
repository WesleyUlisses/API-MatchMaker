import Match from "../../domain/entities/Match";
import { IMatchService } from "../interfaces/IMatchService";
import MatchRepository from "../../infrastructure/repositories/MatchRepository";

export class MatchService implements IMatchService {
    private matchRepository: MatchRepository;

    constructor() {
        this.matchRepository = new MatchRepository();
    }

    async getAllMatches(): Promise<Match[]> {
        return this.matchRepository.findAll();
    }

    async getMatchById(id: number): Promise<Match | null> {
        return this.matchRepository.findById(id);
    }

    async addMatch(match: Match): Promise<void> {
        await this.matchRepository.save(match);
    }

    async updateMatch(match: Match): Promise<void> {
        await this.matchRepository.update(match);
    }

    async deleteMatch(match: Match): Promise<void> {
        await this.matchRepository.delete(match);
    }

    async generateMatches(): Promise<void> {
        // try {
        //     const teams = await this.teamRepository.findAll();

        //     // Verificar se há times suficientes para gerar partidas
        //     if (teams.length < 2) {
        //         throw new Error('É necessário ter pelo menos 2 times para gerar partidas');
        //     }

        //     //dividir times away e home, baseados na quantidade de times
        //     const awayTeams = teams.slice(0, teams.length / 2);
        //     const homeTeams = teams.slice(teams.length / 2);
        //     const players = await this.playerRepository.findAll();

        //     // Implemente aqui a lógica de geração de partidas com base nos times e jogadores disponíveis
        //     // Exemplo simplificado: emparelha os times de forma aleatória
        //     const matches: Match[] = [];

        //     for (let i = 0; i < teams.length; i += 2) {
        //         const match = new Match(
        //             Math.floor(Math.random() * 1000), // ID da partida
        //             new Date(), // Data da partida
        //             awayTeams[i], // Time visitante
        //             homeTeams[i] // Time da casa
                    
        //         );
        //         match.setAwayTeam(awayTeams[i]);
        //         match.setHomeTeam(homeTeams[i]);
        //         match.setPlayers(players);
        //         matches.push(match);
        //     }

        //     // Salvar as partidas geradas no repositório
        //     for (const match of matches) {
        //         await this.matchRepository.save(match);
        //     }

        //     console.log('Partidas geradas com sucesso:', matches);
        // } catch (error) {
        //     console.error('Erro ao gerar partidas:', error);
        //     throw error; // lançar o erro para tratamento superior, se necessário
        // }
    }
}