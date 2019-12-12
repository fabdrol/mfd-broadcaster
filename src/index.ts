const pkg = require('../package.json')

export interface ISKPlugin {
  id: string,
  name: string,
  description: string,
  start: (options:any, restartPlugin:any) => void,
  stop: () => void,
  schema: {
    [key:string]: any
  }
}


module.exports = function NavicoSKPluginFactory (app:any):ISKPlugin {
  return {
    id: pkg.name,
    name: 'Navico MFD Broadcaster',
    description: pkg.description,

    start (options) {
      app.debug(`Plugin started with options ${JSON.stringify(options)}`)
    },

    stop () {
      app.debug(`Plugin stopped`)
    },

    schema: {}
  }
}