const cluster = require('cluster');
const numCPUs = 2; // Let's start with 2 workers per dyno

if (cluster.isPrimary) {
  const port = process.env.PORT || 3000;
  console.log(`Primary ${process.pid} is running`);

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
  
  app.listen(port, '0.0.0.0', () => {
    console.log(`Worker ${process.pid} listening on port ${port}`);
  });
}
