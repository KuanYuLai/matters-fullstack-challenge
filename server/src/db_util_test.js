const OrbitDB = require("orbit-db");
const uuid = require("uuid");
const IpfsClient = require("ipfs-http-client");

module.exports = { put, get_query };

const ipfs = IpfsClient("http://127.0.0.1:5001");

async function put(title, content) {
  const id = uuid.v1();
  /*
  const result = await db.put({
    _id: id,
    title: title,
    content: content,
  });
  console.log("== PUT_result: " + JSON.stringify(result));*/
  return id;
}

async function get_query(query, callback) {
  const orbitdb = await OrbitDB.createInstance(ipfs);
  db = await orbitdb.docs("matters");
  await db.load();

  const result = await db.get(query);
  console.log("== GET_result: " + JSON.stringify(result));
  callback(result);
}
