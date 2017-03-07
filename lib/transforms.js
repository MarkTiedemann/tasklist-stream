const { Transform, PassThrough } = require('stream')
const sec = require('sec')

const makeTransform = convert => new Transform({
  objectMode: true,
  transform: (task, _, callback) =>
    callback(null, Object.assign(task, convert(task)))
})

const defaultTransform = makeTransform(task => ({
  pid: Number(task.pid),
  sessionNumber: Number(task.sessionNumber),
  // convert '1,789 K' into bytes
  memUsage: Number(task.memUsage.replace(/[^\d]/g, '')) * 1024
}))

const verboseTransform = makeTransform(task => ({
  // convert 'HH:MM:SS' into seconds
  cpuTime: sec(task.cpuTime)
}))

const passThrough = new PassThrough({ objectMode: true })

module.exports = { defaultTransform, verboseTransform, passThrough }
