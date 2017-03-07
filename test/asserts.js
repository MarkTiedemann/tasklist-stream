const isDefaultTask = (assert, task) => {
  assert.is(typeof task, 'object')
  assert.is(typeof task.imageName, 'string')
  assert.is(typeof task.pid, 'number')
  assert.is(typeof task.sessionName, 'string')
  assert.is(typeof task.sessionNumber, 'number')
  assert.is(typeof task.memUsage, 'number')
}

const isVerboseTask = (assert, task) => {
  assert.is(typeof task.status, 'string')
  assert.is(typeof task.username, 'string')
  assert.is(typeof task.cpuTime, 'number')
  assert.is(typeof task.windowTitle, 'string')
}

const isNonVerboseTask = (assert, task) => {
  assert.is(task.status, undefined)
  assert.is(task.username, undefined)
  assert.is(task.cpuTime, undefined)
  assert.is(task.windowTitle, undefined)
}

module.exports = { isDefaultTask, isVerboseTask, isNonVerboseTask }
