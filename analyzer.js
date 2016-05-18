const fs = require('fs');

function loadData(inputFile) {

    return new Promise(function(resolve, reject) {

        fs.readFile(inputFile, 'utf8', (err, data) => {

            if (err) return reject(err);
            return resolve(data);
        });
    });
}

function parseLines(data) {

    return new Promise(function(resolve, reject) {

        const lines = data.toString().split("\n");
        const pattern = new RegExp(/([\W\d]+) \[(\w+)\] (\w+#\w+) - (START|END)/);
        const results = [];

        for (var i in lines) {
            var line = lines[i],
                matches = line.match(pattern);
            if (matches) {
                var method = matches[3],
                    phase = matches[4];

                results.push(method + '-' + phase);
            }
        }
        results.push('');

        return resolve(results);
    });
}

function generateReport(outputFile, results) {

    return new Promise(function(resolve, reject) {

        fs.writeFile(outputFile, results.join('\r\n'), (err) => {

            if (err) throw err;

            console.log('Report generated with success!');
            return resolve(true);
        });
    });
}

module.exports.analyze = function(input, output) {

    loadData(input)
        .then(data => parseLines(data))
        .then(results => generateReport(output, results));
};
