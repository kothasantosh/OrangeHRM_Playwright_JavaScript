class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }
}

class AdminPage extends BasePage {
  constructor(page) {
    super(page);
    this.adminTab = page.getByRole('link', { name: 'Admin' });
  }
  async goto() { await this.adminTab.click(); }
}

class PIMPage extends BasePage {
  constructor(page) {
    super(page);
    this.pimTab = page.getByRole('link', { name: 'PIM' });
  }
  async goto() { await this.pimTab.click(); }
}

class LeavePage extends BasePage {
  constructor(page) {
    super(page);
    this.leaveTab = page.getByRole('link', { name: 'Leave' });
  }
  async goto() { await this.leaveTab.click(); }
}

class TimePage extends BasePage {
  constructor(page) {
    super(page);
    this.timeTab = page.getByRole('link', { name: 'Time' });
  }
  async goto() { await this.timeTab.click(); }
}

class MyInfoPage extends BasePage {
  constructor(page) {
    super(page);
    this.myInfoTab = page.getByRole('link', { name: 'My Info' });
  }
  async goto() { await this.myInfoTab.click(); }
}

class PerformancePage extends BasePage {
  constructor(page) {
    super(page);
    this.performanceTab = page.getByRole('link', { name: 'Performance' });
  }
  async goto() { await this.performanceTab.click(); }
}

module.exports = {
  BasePage,
  AdminPage,
  PIMPage,
  LeavePage,
  TimePage,
  MyInfoPage,
  PerformancePage
};
