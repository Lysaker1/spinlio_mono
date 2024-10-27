const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers based on CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    // Replace the dead worker
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  require('./server.js');
}
