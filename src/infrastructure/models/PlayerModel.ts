import { DataTypes, Model } from "sequelize";
import { database } from "../database/Database";

class PlayerModel extends Model {

    public id!: number;
    public name!: string;
    public score!: number;
    public position!: string;
    public goals!: number;
    public assists!: number;
    public yellowCards!: number;
    public redCards!: number;
    public teamId!: number;
    public age!: number;
}

PlayerModel.init({
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
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    goals: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    assists: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    yellowCards: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    redCards: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: database,
    tableName: "player",
    modelName: "player",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    scopes: {
        defaultScope: {
            attributes: { exclude: ["created_at", "updated_at"] },
        },
    },
});

export default PlayerModel;