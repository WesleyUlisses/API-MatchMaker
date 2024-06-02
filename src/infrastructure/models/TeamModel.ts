import { DataTypes, Model } from "sequelize";
import { database } from "../database/Database";
import Player from "../../domain/entities/Player";
import PlayerModel from "./PlayerModel";

class TeamModel extends Model {
    public id!: number;
    public name!: string;
    public logo!: string;
    public matches!: number;
    public wins!: number;
    public draws!: number;
    public losses!: number;
    public goalsFor!: number;
    public goalsAgainst!: number;
    public goalDifference!: number;
    public points!: number;
    public playersList!: Player[];
}

TeamModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [3, 45],
        },
    },
    logo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    playersList: {
        type: DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
    },
    matches: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    wins: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    draws: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    losses: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    goalsFor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    goalsAgainst: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    goalDifference: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: database,
    tableName: "team",
    modelName: "team",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    scopes: {
        defaultScope: {
            attributes: { exclude: ["created_at", "updated_at"] },
        },
    },
});

TeamModel.hasMany(PlayerModel, { foreignKey: 'teamId', as: 'players' });


export default TeamModel;
