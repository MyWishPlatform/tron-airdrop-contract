module.exports = {
    networks: {
        development: {
            privateKey: '319e9455ef50cffb8912041663c9ddd12cf8e9749e3d89cff0e341927efce613',
            consume_user_resource_percent: 30, // eslint-disable-line camelcase
            fee_limit: 100000000, // eslint-disable-line camelcase
            fullHost: 'http://127.0.0.1:9090',
            network_id: '*', // eslint-disable-line camelcase
        },
        mainnet: {
            privateKey: process.env.PK,
            consume_user_resource_percent: 30, // eslint-disable-line camelcase
            fee_limit: 100000000, // eslint-disable-line camelcase
            fullHost: 'https://api.trongrid.io',
            network_id: '*', // eslint-disable-line camelcase
        },
        shasta: {
            privateKey: '19a76e5fdb6a821e54a80d1e6242f451f912c5ee64734bade8c1b2cabb6ab29d',
            consume_user_resource_percent: 30, // eslint-disable-line camelcase
            fee_limit: 100000000, // eslint-disable-line camelcase
            fullHost: 'https://api.shasta.trongrid.io',
            network_id: '*', // eslint-disable-line camelcase
        },
        compilers: {
            solc: {
                version: '0.4.25' // for compiler version
            }
        }
    },
    solc: {
        optimizer: {
            enabled: true, // enable solc optimize, default: false
            runs: 200
        }
    }
};
