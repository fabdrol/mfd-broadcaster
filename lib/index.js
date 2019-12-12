"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pkg = require('../package.json');
module.exports = function NavicoSKPluginFactory(app) {
    return {
        id: pkg.name,
        name: 'Navico MFD Broadcaster',
        description: pkg.description,
        start(options) {
            app.debug(`Plugin started with options ${JSON.stringify(options)}`);
        },
        stop() {
            app.debug(`Plugin stopped`);
        },
        schema: {}
    };
};
