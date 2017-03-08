const test = require('ava').cb
const tasklist = require('../')
const { isDefaultTask, isNonVerboseTask } = require('./asserts')

test(assert => {
  tasklist({ filters: ['status eq running', 'imagename ne invalid.exe'] })
  .on('data', task => {
    isDefaultTask(assert, task)
    isNonVerboseTask(assert, task)
  })
  .on('error', assert.fail)
  .on('end', assert.end)
})
