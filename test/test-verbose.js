const test = require('ava').cb
const tasklist = require('../')
const { isDefaultTask, isVerboseTask } = require('./asserts')

test(assert => {
  tasklist({ verbose: true })
  .on('data', task => {
    isDefaultTask(assert, task)
    isVerboseTask(assert, task)
  })
  .on('error', assert.fail)
  .on('end', assert.end)
})
