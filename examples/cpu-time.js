const tasklist = require('../')

// get all tasks that have run for more than a minute
tasklist({ filters: ['status eq running', 'cputime gt 00:01:00'] })
  .on('data', console.log)
