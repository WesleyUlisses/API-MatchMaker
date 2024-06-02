import { DataTypes, Model } from "sequelize";
import { database } from "../database/Database";
import TeamModel from "./TeamModel";

class MatchModel extends Model {
    public id?: number;
    public date!: string;
    public homeTeamId!: number;
    public awayTeamId!: number;
    public homeTeamGoals!: number;
    public awayTeamGoals!: number;
    public played!: boolean;
}

MatchModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    homeTeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    awayTeamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    homeTeamGoals: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    awayTeamGoals: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    played: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    sequelize: database,
    tableName: "match",
    modelName: "match",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    scopes: {
        defaultScope: {
            attributes: { exclude: ["created_at", "updated_at"] },
        },
    },
});

MatchModel.belongsTo(TeamModel, { as: 'homeTeam', foreignKey: 'homeTeamId' });
MatchModel.belongsTo(TeamModel, { as: 'awayTeam', foreignKey: 'awayTeamId' });

TeamModel.hasMany(MatchModel, { as: 'homeMatches', foreignKey: 'homeTeamId' });
TeamModel.hasMany(MatchModel, { as: 'awayMatches', foreignKey: 'awayTeamId' });

export default MatchModel;