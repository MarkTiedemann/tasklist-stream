const tasklist = require('./')

tasklist()
  .on('data', console.log)
