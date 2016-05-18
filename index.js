const Analyzer = require('./src/analyzer');

var input = 'input/input-1.data';
if (process.argv.indexOf("-i") != -1) {
    input = process.argv[process.argv.indexOf("-i") + 1];
}

var output = 'output/output.log';
if (process.argv.indexOf("-o") != -1) {
    output = process.argv[process.argv.indexOf("-o") + 1];
}

Analyzer.analyze(input, output);
