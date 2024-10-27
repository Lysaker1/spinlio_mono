const cluster = require('cluster');
const numCPUs = process.env.WEB_CONCURRENCY || 2; // Let Heroku decide worker count


if (cluster.isPrimary) {
  const port = process.env.PORT || 3000;
  console.log(`Primary ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Improve worker management
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died (${signal || code}). Restarting...`);
    cluster.fork();
  });

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`);
  });

  // Add graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    for (const id in cluster.workers) {
      cluster.workers[id].process.kill('SIGTERM');
    }
    process.exit(0);
  });
} else {
  const app = require('./server.js')();
  const port = process.env.PORT || 3000;
  
  const server = app.listen(port, '0.0.0.0', () => {
    console.log(`Worker ${process.pid} listening on port ${port}`);
  });

  // Graceful shutdown for workers
  process.on('SIGTERM', () => {
    console.log(`Worker ${process.pid} received SIGTERM. Closing server...`);
    server.close(() => {
      console.log(`Worker ${process.pid} server closed`);
      process.exit(0);
    });
  });
}
