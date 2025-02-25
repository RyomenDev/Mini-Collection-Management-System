import esClient from "../db/elasticsearch.js";

const USER_INDEX = "users";

async function createUserIndex() {
  try {
    const { body: exists } = await esClient.indices.exists({
      index: USER_INDEX,
    });

    if (!exists) {
      await esClient.indices.create({
        index: USER_INDEX,
        body: {
          mappings: {
            properties: {
              name: { type: "text" },
              email: { type: "keyword" }, // Keep as keyword for exact matching
              password: { type: "text" },
            },
          },
        },
      });
      console.log("✅ User index created successfully.");
    } else {
      console.log("ℹ️ User index already exists.");
    }
  } catch (error) {
    console.error("❌ Error checking/creating user index:", error);
  }
}

async function addUser(userData) {
  return await esClient.index({
    index: USER_INDEX,
    body: userData,
    refresh: true, // Ensures data is searchable immediately
  });
}

async function findUserByEmail(email) {
  //   console.log("🔍 Finding user:", email);

  try {
    const response = await esClient.search({
      index: USER_INDEX,
      body: {
        query: {
          match: { email: email }, // `match` works better for flexible search
        },
      },
    });

    // console.log("🔍 Search Response:", response);
    const hits = response.hits;
    // console.log("🔍 Hits:", hits);

    return hits.total.value > 0 ? hits.hits[0]._source : null;
  } catch (error) {
    console.error("❌ Error searching user by email:", error);
    return null;
  }
}

// Ensure the index is created when the app starts
await createUserIndex();

export { createUserIndex, addUser, findUserByEmail };
