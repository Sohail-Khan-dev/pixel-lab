const config = {
    apps: [
        {
            name: 'laravel-app',
            script: 'php',
            args: 'artisan serve --host=0.0.0.0 --port=8000',
            cwd: '/home/user/webapp',
            env: {
                'APP_ENV': 'local',
                'APP_DEBUG': 'true'
            },
            watch: false,
            instances: 1,
            exec_mode: 'fork',
            autorestart: true,
            max_restarts: 5,
            error_file: '/home/user/webapp/storage/logs/laravel-error.log',
            out_file: '/home/user/webapp/storage/logs/laravel-out.log',
            log_file: '/home/user/webapp/storage/logs/laravel-combined.log'
        }
    ]
};

export default config;