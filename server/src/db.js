let IPFS = require("ipfs-http-client");
let OrbitDB = require("orbit-db");

export {};

const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true,
  },
};

// Create IPFS instance
const ipfs = new IPFS(ipfsOptions);

const orbitdb = await OrbitDB.createInstance(ipfs);

ipfs.on("ready", async () => {
  const orbitdb = await OrbitDB.createInstance(ipfs);
  const db = await orbitdb.keyvalue("first-database");
});
