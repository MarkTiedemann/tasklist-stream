const tasklist = require('../')

tasklist({
  verbose: true,
  filters: ['status eq running', 'imagename eq chrome.exe']
})
.on('data', chrome => {
  // filter non-selected tabs
  const title = chrome.windowTitle
  if (!['N/A', 'Nicht zutreffend'].includes(title)) {
    // remove tab title suffix
    const tab = title.substring(0, title.lastIndexOf(' - Google Chrome'))
    console.log(`You have currently opened "${tab}" in Chrome!`)
    // 'https://github.com' => You have currently opened "GitHub" in Chrome!
  }
})
