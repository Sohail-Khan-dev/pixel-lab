export default {
  apps: [
    {
      name: 'laravel-serve',
      script: 'php',
      args: 'artisan serve --host=0.0.0.0 --port=8000',
      cwd: '/home/user/webapp',
      watch: false,
      env: {
        APP_ENV: 'local'
      }
    },
    {
      name: 'vite-dev',
      script: 'npm',
      args: 'run dev -- --host 0.0.0.0 --port=5173',
      cwd: '/home/user/webapp',
      watch: false
    }
  ]
};
