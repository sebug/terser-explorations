({
    baseUrl: "src",
    name: "index",
    out: "index.js",
    optimize: 'none',
    onBuildWrite: function (name, path, contents) {
	var terser = require.nodeRequire("terser");
	var deasync = require.nodeRequire("deasync");
	var wrappedMinify = function (contents, cb) {
	    terser.minify(contents).then(function (result) {
		cb(undefined, result);
	    }, function (err) {
		cb(err);
	    });
	};
	var minify = deasync(wrappedMinify);
	var minified = minify(contents);
	return minified.code;
    }
});
