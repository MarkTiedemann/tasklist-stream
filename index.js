const { spawn } = require('child_process')
const csv = require('csv')
const { defaultTransform, verboseTransform, passThrough } = require('./lib/transforms')

const defaultArgs = ['/fo', 'csv']
const verboseArgs = defaultArgs.concat(['/v'])

const defaultColumns = ['imageName', 'pid', 'sessionName', 'sessionNumber', 'memUsage']
const verboseColumns = defaultColumns.concat(['status', 'username', 'cpuTime', 'windowTitle'])

module.exports = ({ verbose = false } = {}) =>
  spawn('tasklist.exe', verbose ? verboseArgs : defaultArgs)
  .stdout
  .pipe(csv.parse({
    columns: verbose ? verboseColumns : defaultColumns,
    from: 2 // skip header record
  }))
  .pipe(defaultTransform)
  .pipe(verbose ? verboseTransform : passThrough)
