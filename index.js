const { spawn } = require('child_process')
const csv = require('csv')
const { defaultTransform, verboseTransform, passThrough } = require('./lib/transforms')

const defaultArgs = ['/fo', 'csv', '/nh']
const verboseArgs = defaultArgs.concat(['/v'])

const applyFilters = (args, filters) => []
  .concat.apply(args, filters.map(fi => ['/fi', `${fi}`]))

const defaultColumns = ['imageName', 'pid', 'sessionName', 'sessionNumber', 'memUsage']
const verboseColumns = defaultColumns.concat(['status', 'username', 'cpuTime', 'windowTitle'])

module.exports = ({ verbose = false, filters = [] } = {}) =>
  spawn('tasklist.exe', verbose
    ? applyFilters(verboseArgs, filters)
    : applyFilters(defaultArgs, filters)
  )
  .stdout
  .pipe(csv.parse({ columns: verbose
    ? verboseColumns
    : defaultColumns
  }))
  .pipe(defaultTransform())
  .pipe(verbose
    ? verboseTransform()
    : passThrough()
  )
