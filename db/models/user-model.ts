import { Model, DataTypes, Optional } from "sequelize";
import squaalizeInstance from "../config";

interface UserAttributes {
    id: number;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    zip: string;
    state: string;
    city: string;
    country: string;
    phone: string;
    password: string;
    createdAt?: Date;
    updatedAt?: Date;
};

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {};

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public firstName!: string;
    public lastName!: string;
    public address!: string;
    public email!: string;
    public zip!: string;
    public state!: string;
    public city!: string;
    public country!: string;
    public phone!: string;
    public password!: string;

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
};

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: squaalizeInstance,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
});

export default User;


