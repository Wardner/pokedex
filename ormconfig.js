const dotenv = require("dotenv");
dotenv.config();

const config = {
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    ssl: process.env.SSL,
    entities: ["build/src/database/entities/**/*.js"],
};

module.exports = config;