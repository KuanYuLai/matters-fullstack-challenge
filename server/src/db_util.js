const IPFS = require("ipfs");
const OrbitDB = require("orbit-db");
const uuid = require("uuid");

module.exports = { initdb, put, get_query };

// Create IPFS instance
const initIPFSInstance = async () => {
  return await IPFS.create();
};

async function initdb(callback) {
  initIPFSInstance().then(async (ipfs) => {
    //Create orbitdb instance
    const orbitdb = await OrbitDB.createInstance(ipfs);
    const db = await orbitdb.docs("matters");
    await db.load();

    // Create / Open a database
    console.log("== DB initiated");
    callback(ipfs, db);
  });
}

/*
async function put(title, content, callback) {
  initdb(async (ipfs, db) => {
    const id = uuid.v1();
    const result = await db.put({
      _id: id,
      title: title,
      content: content,
    });

    console.log("== PUT_result: " + JSON.stringify(id));
    ipfs.stop();
    callback(id);
  });
}*/

async function put(title, content) {
  const id = uuid.v1();
  return id;
}

async function get_query(query, callback) {
  initdb(async (ipfs, db) => {
    const result = await db.get(query);
    console.log("== GET_result: " + JSON.stringify(result));
    callback(result);
  });
}
