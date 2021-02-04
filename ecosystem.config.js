module.exports = {
  apps: [
    {
      name: "API",
      script: "./src/app.js",
      watch: false,
      instances: 1, // 12 CPU - 1 = 11 CPU => 1 node instance
      exec_mode: "cluster",
      node_args: "--max_old_space_size=800",
      max_memory_restart: "1200M",
      env: {
        NODE_ENV: process.env.NODE_ENV || "local",
      },
    },
    {
      name: "Worker",
      script: "./src/worker.js",
      watch: false,
      instances: 1,
      exec_mode: "cluster",
      node_args: "--max_old_space_size=800",
      max_memory_restart: "1200M",
      env: {
        NODE_ENV: process.env.NODE_ENV || "local",
      },
    },
  ],
};
