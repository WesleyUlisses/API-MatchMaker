import express, { Application, Request, Response, NextFunction } from 'express';
import TeamModel from '../models/TeamModel';
import MatchModel from '../models/MatchModel';
import PlayerModel from '../models/PlayerModel';
import playerRoutes from '../../presentation/routes/PlayerRoutes';
import teamRoutes from '../../presentation/routes/TeamRoutes';
import matchRoutes from '../../presentation/routes/MatchRoutes';
import { ErrorHandler } from '../../presentation/middlewares/ErrorHandler';
import { database } from '../../infrastructure/database/Database';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());
app.use('/api', playerRoutes);
app.use('/api', teamRoutes);
app.use('/api', matchRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.handle(err, req, res);
});

database.authenticate().then(() => {
    database.sync({ force: false }).then(() => {
        
        console.log(database.models);
        console.log('Database and tables created!');
        syncModel();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    });
  });

async function syncModel() {
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');

        await TeamModel.sync({ force: false });  // Recria a tabela do zero
        await MatchModel.sync({ force: false }); // Recria a tabela do zero
        await PlayerModel.sync({ force: false }); // Sincroniza a tabela
        console.log('TeamModel was synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database or synchronize the model:', error);
    } finally {
        await database.close();
    }
}


