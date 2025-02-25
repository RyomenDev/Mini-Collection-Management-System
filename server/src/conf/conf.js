import dotenv from "dotenv";
dotenv.config();

const conf = {
  ELASTICSEARCH_URL: String(process.env.ELASTICSEARCH_URL),
  ELASTICSEARCH_USERNAME: String(process.env.ELASTICSEARCH_USERNAME),
  ELASTICSEARCH_PASSWORD: String(process.env.ELASTICSEARCH_PASSWORD),
  PORT: String(process.env.PORT),
  //   STRIPE_SECRET_KEY: String(process.env.STRIPE_SECRET_KEY),
  JWT_SECRET: String(process.env.JWT_SECRET),
  CORS_ORIGIN1: String(process.env.CORS_ORIGIN1),
  CORS_ORIGIN2: String(process.env.CORS_ORIGIN2),
  CORS_ORIGIN3: String(process.env.CORS_ORIGIN3),
};

export default conf;
