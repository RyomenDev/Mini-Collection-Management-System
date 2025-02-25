import { Client } from "@elastic/elasticsearch";
import fs from "fs";
import conf from "../conf/conf.js";

const esClient = new Client({
  node: conf.ELASTICSEARCH_URL,
  auth: conf.ELASTICSEARCH_USERNAME
    ? {
        username: conf.ELASTICSEARCH_USERNAME,
        password: conf.ELASTICSEARCH_PASSWORD,
      }
    : undefined,
  tls: {
    ca: fs.readFileSync("./http_ca.crt"),
    rejectUnauthorized: false, // Ignore SSL verification
  },
});

export default esClient;

// import { Client } from "@elastic/elasticsearch";
// const esClient = new Client({ node: "http://localhost:5601" });
// export default esClient;
