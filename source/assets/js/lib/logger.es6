const logger = {
  log(...args){
    console.log('DEBUG', ...args)
  },

  info(...args){
    console.log('INFO', ...args)
  },

  warn(...args){
    console.log('WARNING', ...args)
  },

  error(...args){
    console.log('ERROR', ...args)
  },
}
