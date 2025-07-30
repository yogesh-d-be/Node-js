const os = require('os');

console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Info:", os.cpus().length, "cores");


