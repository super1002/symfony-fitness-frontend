const { env } = require('process');
const dotenv = require('dotenv');
// const http = require('http');
// const querystring = require('querystring');
// Initialize dotenv config.
dotenv.config();

let frontendApiHost = env.VIRTUAL_HOST;
let localPort = 8080;
let publicPort = env.PUBLIC_PORT_VUE;
// let filterOptions = {
//     label: [
//         'io.docksal.virtual-host'
//     ]
// }

// console.log(JSON.stringify(filterOptions));
// console.log('/containers/json?filters=' + JSON.stringify(filterOptions));
//
// let dockerSocketOptions = {
//     method: 'GET',
//     hostname: 'localhost',
//     socketPath: '/var/run/docker.sock',
//     path: '/containers/json?filters=' + JSON.stringify(filterOptions)
// }

// function containerPublicPortRequest() {
//     return new Promise(function (resolve, reject) {
//         const req = http.request(dockerSocketOptions, (res) => {
//             console.log(dockerSocketOptions);
//             var body = '';
//             res.on('data', (chunk) => {
//                 body += chunk;
//             });
//             res.on('end', () => {
//                 let bodyJson = JSON.parse(body);
//                 bodyJson.forEach(container => {
//                     let virtualHostLabel = container.Labels['io.docksal.virtual-host'];
//                     if (virtualHostLabel.includes(frontendApiHost)) {
//                         console.log(container);
//                         let ports = container.Ports;
//                         ports.forEach(port => {
//                             if (port.PrivatePort === localPort) {
//                                 publicPort = port.PublicPort;
//                                 // resolve(publicPort);
//                             }
//                         })
//                     }
//                 })
//                 reject('Could not find public port mapping.');
//             });
//         });
//         req.end();
//     });
// }

// containerPublicPortRequest().then(publicPort => {
//     console.log(publicPort);
//     devServerConfig.public = frontendApiHost + ':' + publicPort;
//
// }).catch(reason => {
//     console.log(reason);
//     // process.exit(1);
// });

let devServerConfig = {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: localPort,
    public: frontendApiHost + ':' + publicPort.toString(),
}

module.exports = {
    configureWebpack: {
        devServer: devServerConfig
    }
};
