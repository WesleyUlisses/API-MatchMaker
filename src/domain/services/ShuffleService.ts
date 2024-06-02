import Player from '../entities/Player';
import Team from '../entities/Team';
import RandomUtils from '../../shared/utils/RandomUtils';

export class ShuffleService {

    shuffle(players: Player[], numTeams: number, playersPerTeam: number): Team[] {
        
        // Filtrar goleiros e jogadores de linha
        const goalkeepers = players.filter(player => player.getPosition() === 'Goalkeeper');
        const fieldPlayers = players.filter(player => player.getPosition() !== 'Goalkeeper');

        // Inicializar times
        const teams: Team[] = Array.from({ length: numTeams }, (_, index) => new Team(index + 1, `Team ${index + 1}`, '', [], 0, 0, 0, 0, 0, 0, 0, 0));

        // Verificar se a quantidade total de jogadores é suficiente
        const totalPlayersNeeded = numTeams * playersPerTeam;
        const playersAvailable = players.length;

        if (playersAvailable < totalPlayersNeeded) {
            const playersNeeded = totalPlayersNeeded - playersAvailable;
            if (playersNeeded > 4) {
                throw new Error(`Não há jogadores suficientes para formar os times com a quantidade de jogadores especificada. Reduza a quantidade de times ou aumente o número de jogadores.`);
            }
        }

        // Distribuir goleiros
        this.distributeGoalkeepers(goalkeepers, teams, playersPerTeam);

        // Embaralhar jogadores de linha
        const shuffledPlayers = RandomUtils.shuffle(fieldPlayers);

        // Distribuir jogadores de linha balanceando idade e habilidade
        this.distributePlayers(shuffledPlayers, teams, playersPerTeam);

        return teams;
    }

    private distributeGoalkeepers(goalkeepers: Player[], teams: Team[], playersPerTeam: number): void {
        const numGoalkeepers = goalkeepers.length;
        const numTeams = teams.length;

        // Verificar se há goleiros suficientes
        if (numGoalkeepers >= numTeams) {
            for (let i = 0; i < numTeams; i++) {
                teams[i].getPlayers().push(goalkeepers[i]);
            }
        } else {
            for (let i = 0; i < numTeams; i++) {
                if (i < numGoalkeepers) {
                    teams[i].getPlayers().push(goalkeepers[i]);
                } else {
                    // Emprestar goleiro de outro time
                    const teamWithGoalkeeper = teams[i % numGoalkeepers];
                    teams[i].getPlayers().push(teamWithGoalkeeper.getPlayers().find(player => player.getPosition() === 'Goalkeeper')!);
                }
            }
        }

        // Preencher os times com placeholders caso não haja goleiros suficientes
        for (const team of teams) {
            while (team.getPlayers().length < playersPerTeam && team.getPlayers().filter(player => player.getPosition() === 'Goalkeeper').length < 1) {
                // Placeholder para goleiros inexistentes
                team.getPlayers().push(new Player(0, 'Placeholder Goalkeeper', 0, 'Goalkeeper', 0, 0, 0, 0, team.getId(), 0));
            }
        }
    }

    private distributePlayers(players: Player[], teams: Team[], playersPerTeam: number): void {
        // Ordenar jogadores por nota e idade
        players.sort((a, b) => b.getScore() - a.getScore() || b.getAge() - a.getAge());

        // Distribuir jogadores entre os times
        for (const player of players) {
            const team = this.findBestTeamForPlayer(teams, player, playersPerTeam);
            if (team) {
                team.getPlayers().push(player);
            }
        }
    }

    private findBestTeamForPlayer(teams: Team[], player: Player, playersPerTeam: number): Team | null {
        // Encontrar o time com menor média de habilidade e idade que ainda não está completo
        let bestTeam: Team | null = null;
        let bestTeamScore = Number.MAX_VALUE;

        for (const team of teams) {
            if (team.getPlayers().length < playersPerTeam) {
                const teamScore = this.calculateTeamScore(team);
                if (teamScore < bestTeamScore && this.canAddPlayerToTeam(team, player)) {
                    bestTeam = team;
                    bestTeamScore = teamScore;
                }
            }
        }

        return bestTeam;
    }

    private calculateTeamScore(team: Team): number {
        const players = team.getPlayers();
        const skillSum = players.reduce((sum, player) => sum + player.getScore(), 0);
        const ageSum = players.reduce((sum, player) => sum + player.getAge(), 0);
        const skillAvg = skillSum / players.length;
        const ageAvg = ageSum / players.length;
        return skillAvg + ageAvg;
    }

    private canAddPlayerToTeam(team: Team, player: Player): boolean {
        // Verificar se pode adicionar jogador com mais de 40 anos
        const playersOver40 = team.getPlayers().filter(p => p.getAge() > 40);
        if (player.getAge() > 40 && playersOver40.length >= 1) {
            return false;
        }
        return true;
    }
}
