import * as fs from 'fs';

export function createScreenshotsDir(baseDir: string, browserName: string, timestamp: number): string {
  const screenshotsDir = `${baseDir}/screenshots_${browserName}_${timestamp}`;
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }
  return screenshotsDir;
}

export function getScreenshotPath(screenshotsDir: string, pageName: string,): string {
  return `${screenshotsDir}/${pageName}.png`;
}
