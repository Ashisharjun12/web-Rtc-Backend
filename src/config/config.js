import { config } from "dotenv";

config();

const {
  PORT,
  MONGO_URI,
  REDIS_URI,
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRY,
} = process.env;

export const _config = {
  PORT,
  MONGO_URI,
  REDIS_URI,
  ACCESS_TOKEN,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN,
  REFRESH_TOKEN_EXPIRY,
};
