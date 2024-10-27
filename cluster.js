const cluster = require('cluster');
const numCPUs = 2; // Let's start with 2 workers per dyno

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running on port ${process.env.PORT}`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    // Replace the dead worker
    cluster.fork();
  });

  // Log when a worker comes online
  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });
} else {
  const app = require('./server.js')();
  const port = process.env.PORT || 3000;
  
  app.listen(port, () => {
    console.log(`Worker ${process.pid} listening on port ${port}`);
  });
}
