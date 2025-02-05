import { Optional, UUID } from "sequelize";
import { Table, Model, Column, CreatedAt, UpdatedAt, Default, DataType, IsEmail} from "sequelize-typescript";

interface UserAttributes {
    id: string;
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

@Table({
    tableName: 'users',
    timestamps: true,
    modelName: 'User'
})

export default class Users extends Model<UserAttributes, UserCreationAttributes> {
    @Column({
        primaryKey: true,
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
    })
    declare id: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare firstName: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare lastName: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare address: string;

    @IsEmail
    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare email: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare zip: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare state: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare city: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare country: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare phone: string;

    @Column({
        type: 'VARCHAR(255)',
        allowNull: false,
    })
    declare password: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}