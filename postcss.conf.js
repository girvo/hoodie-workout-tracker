module.exports = {
    "use": ["postcss-import", "precss", "autoprefixer"],
    "postcss-import": {
        onImport: function(sources) {
            global.watchCSS(sources);
        }
    }
}
