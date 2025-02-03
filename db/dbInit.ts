import User from "./models/user-model";

const dbInit = async () => {
    await User.sync({ alter: true });
    console.log("User table created");
};

export { dbInit };