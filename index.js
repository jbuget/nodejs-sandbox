const Analyzer = require('./analyzer');

var input = 'input-1.data';
if (process.argv.indexOf("-i") != -1) {
    input = process.argv[process.argv.indexOf("-i") + 1];
}

var output = 'output.log';
if (process.argv.indexOf("-o") != -1) {
    output = process.argv[process.argv.indexOf("-o") + 1];
}

Analyzer.analyze(input, output);
