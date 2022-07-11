const server = require('./app')

const rookout = require('rookout')
rookout.start({ 
    token: [f06399e9ac1da2c14d3fb172dbe053601acc64bb43e36ae468e53d6e0b6bd50c],
    labels: {
        env: dev
    }
}).then(server.start())

