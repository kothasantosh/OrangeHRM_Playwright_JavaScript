const fs = require('fs');

function createScreenshotsDir(baseDir, browserName, timestamp) {
  const screenshotsDir = `${baseDir}/screenshots_${browserName}_${timestamp}`;
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  return screenshotsDir;
}

function getScreenshotPath(screenshotsDir, pageName, browserName, timestamp) {
  return `${screenshotsDir}/${pageName}_${browserName}_${timestamp}.png`;
}

module.exports = { createScreenshotsDir, getScreenshotPath };
