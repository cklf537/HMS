// import User from "../models/user-model";
// import User from "../models/usemodel";
import User from "../models/usemodel";
import sequelize  from "../db/db-connection";

const dbInit = async () => {
    // User.drop();
    await sequelize.sync({ alter: true });
    console.log("Database synced");
    User.create({
        firstName: "John",
        lastName: "Doe",
        address: "123 Main St",
        email: "john.doetest.co",
        zip: "12345",
        state: "NY",
        city: "New York",
        country: "USA",
        phone: "123-456-7890",
        password: "12345678",
    });

};

export { dbInit };