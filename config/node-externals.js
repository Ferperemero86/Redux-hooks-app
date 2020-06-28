//Requires just the externals we need to be bundle.
//Everything that is not related to react-universal-component won't be bundled.
const fs = require("fs");
const path = require("path");
const nodeModules = path.resolve(__dirname, "../node_modules");

//Checks in node_modules data not related to react-universal-component, bin or webpack-flush-chunks
//And returns the rest for externals
const externals = fs
    .readdirSync(nodeModules)
    .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
    .reduce((externals, mod) => {
        externals[mod] = `commonjs ${mod}`
        return externals
    }, {});

externals["react-dom/server"] = "commonjs react-dom/server";

module.exports = externals;