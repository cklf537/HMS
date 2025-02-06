import { Optional, UUID } from "sequelize";
import { Table, Model, Column, CreatedAt, UpdatedAt, Default, DataType, IsEmail, IsUUID, PrimaryKey, NotNull, Length, AllowNull, Unique} from "sequelize-typescript";

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
    @IsUUID(4)
    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column
    declare id: string;

    @AllowNull(false)
    @Column
    declare firstName: string;

    @AllowNull(false)
    @Column
    declare lastName: string;

    @AllowNull(false)
    @Column
    declare address: string;

    @IsEmail
    @AllowNull(false)
    @Unique
    @Column
    declare email: string;

    @Length({ min: 5, max: 10 })
    @AllowNull(false)
    @Column
    declare zip: string;

    @AllowNull(false)
    @Column
    declare state: string;

    @AllowNull(false)
    @Column
    declare city: string;

    @AllowNull(false)
    @Column
    declare country: string;
    
    @AllowNull(false)
    @Column
    declare phone: string;

    @AllowNull(false)
    @Column
    declare password: string;

    @CreatedAt
    declare createdAt: Date;

    @UpdatedAt
    declare updatedAt: Date;
}