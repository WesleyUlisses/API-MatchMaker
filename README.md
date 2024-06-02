# MatchMaker

MatchMaker é uma aplicação para gerenciamento de futebol entre amigos, usada por aproximadamente 60 pessoas. Ela facilita a criação e o balanceamento de times para partidas, garantindo que todos os jogadores tenham uma experiência justa e divertida. Com funcionalidades de sorteio, equilíbrio de habilidades e gestão de jogadores, MatchMaker transforma seu jogo.

## Funcionalidades

- Criação e gerenciamento de jogadores
- Balanceamento de times com base em habilidades e idade
- Suporte para partidas com goleiros e jogadores de linha
- Tratamento de erros e respostas claras

## Tecnologias Utilizadas

- Node.js
- Express
- TypeScript
- Postgres
- Sequelize
- Sequelize-typescript

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/WesleyUlisses/API-MatchMaker
    cd matchmaker
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Crie um arquivo na extensão `.env`:
    ```bash
    echo "VARIAVEL=VALOR" > .env
    ```

4. Configure uma instancia de banco de dados Relacional para rodar a aplicação, utilizei postgres, caso utilize outro como o MySql, altere o dialect no arquivo:
    ![Imagem do codigo a ser alterado]('./resources/images/image.png')

4. Configure a URL do banco de dados no arquivo `.env`:
    ```txt
    NODE_ENV='development'
    DATABASE_URL='postgresql://exemplo:exemplo:5320:hostexemplos'
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```

## Rotas da API

### Criar um Jogador

- **Rota**: `POST /api/players`
- **Payload**:
    ```json
    {
        "name": "John Doe",
        "score": 85,
        "position": "Forward",
        "goals": 10,
        "assists": 5,
        "yellowCards": 2,
        "redCards": 0,
        "teamId": 1,
        "age": 28
    }
    ```
- **Response**:
    ```json
    {
        "id": 1,
        "name": "John Doe",
        "score": 85,
        "position": "Forward",
        "goals": 10,
        "assists": 5,
        "yellowCards": 2,
        "redCards": 0,
        "teamId": 1,
        "age": 28
    }
    ```

### Listar Jogadores

- **Rota**: `GET /api/players`
- **Response**:
    ```json
    [
        {
            "id": 1,
            "name": "John Doe",
            "score": 85,
            "position": "Forward",
            "goals": 10,
            "assists": 5,
            "yellowCards": 2,
            "redCards": 0,
            "teamId": 1,
            "age": 28
        }
        // Outros jogadores...
    ]
    ```

### Atualizar um Jogador

- **Rota**: `PUT /api/players/:id`
- **Payload**:
    ```json
    {
        "name": "John Smith",
        "score": 90,
        "position": "Midfielder",
        "goals": 12,
        "assists": 8,
        "yellowCards": 1,
        "redCards": 0,
        "teamId": 2,
        "age": 30
    }
    ```
- **Response**:
    ```json
    {
        "id": 1,
        "name": "John Smith",
        "score": 90,
        "position": "Midfielder",
        "goals": 12,
        "assists": 8,
        "yellowCards": 1,
        "redCards": 0,
        "teamId": 2,
        "age": 30
    }
    ```

### Deletar um Jogador

- **Rota**: `DELETE /api/players/:id`
- **Response**:
    ```json
    {
        "message": "Jogador deletado com sucesso."
    }
    ```

### Criar e Balancear Times

- **Rota**: `POST /api/matches`
- **Payload**:
    ```json
    {
        "numTeams": 2,
        "playersPerTeam": 5
    }
    ```
- **Response**:
    ```json
    [
        {
            "id": 1,
            "name": "Team 1",
            "players": [
                // Lista de jogadores
            ]
        },
        {
            "id": 2,
            "name": "Team 2",
            "players": [
                // Lista de jogadores
            ]
        }
    ]
    ```

## Estrutura do Projeto

```js
  project/
  ├── src/
  │   ├── application/
  │   │   ├── dtos/
  │   │   ├── services/
  │   │   └── useCases/
  │   ├── domain/
  │   │   ├── entities/
  │   │   └── repositories/
  │   ├── infra/
  │   │   ├── database/
  │   │   ├── repositories/
  │   │   └── shuffle/
  │   ├── interfaces/
  │   │   ├── controllers/
  │   │   ├── http/
  │   │   │   └── routes/
  │   │   └── errors/
  │   └── server.ts
  └── README.md
```


## Contribuição

Sinta-se à vontade para contribuir com este projeto. Faça um fork do repositório, crie um branch para sua feature ou correção de bug, e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

