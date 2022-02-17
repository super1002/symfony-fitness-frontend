module.exports = {
    configureWebpack: {
        devServer: {
            disableHostCheck: true,
            host: '0.0.0.0',
            port: 8080,
            public: 'symfony-fitness-frontend.docksal.site:49169'
        }
    }
}