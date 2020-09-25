const { minify } = require('terser');
const deasync = require('deasync');

const trailingComma = 'function (a, b,) { return a + b; }';
const lambdaExSimple = 'const f = (a,b) => a + b;';

const trySamples = async () => {
    try {
	const trailingCommaMinified = await minify(trailingComma);
    } catch (e) {
	console.log('Trailing comma does not work');
    }

    const lambdaExSimpleMinified = await minify(lambdaExSimple);

    console.log(lambdaExSimpleMinified.code);
}


trySamples().then(() => {
    console.log('Done');
});


