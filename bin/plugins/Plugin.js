class Plugin {
    apply(compiler) {
        // compiler.plugin('watch-run', (watching, callback) => {
        //     const changedFiles = watching.compiler.watchFilesSystem.watcher.mtimes;
        //     console.log(changedFiles);
        //     callback();
        // })
        compiler.plugin('emit', (compilation, callback) => {
            compilation.assets['tttt'] = {
                source() {
                    return 'test';
                },
                size() {
                    return Buffer.byteLength('test', 'utf8');
                }
            };
            callback();
        });
    }
}

module.exports = Plugin;