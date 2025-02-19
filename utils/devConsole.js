// Consola personalizada para depuración
const DevConsole = {
    log: function (message, ...args) {
      console.log(`%c[DEV LOG] ${message}`, 'color: green; font-weight: bold;', ...args);
    },
  
    warn: function (message, ...args) {
      console.warn(`%c[DEV WARN] ${message}`, 'color: orange; font-weight: bold;', ...args);
    },
  
    error: function (message, ...args) {
      console.error(`%c[DEV ERROR] ${message}`, 'color: red; font-weight: bold;', ...args);
    },
  
    info: function (message, ...args) {
      console.info(`%c[DEV INFO] ${message}`, 'color: blue; font-weight: bold;', ...args);
    },
  
    debug: function (message, ...args) {
      console.debug(`%c[DEV DEBUG] ${message}`, 'color: purple; font-weight: bold;', ...args);
    }
  };
  
  export default DevConsole;
  