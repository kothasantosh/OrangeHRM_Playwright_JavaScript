
class AdminPage {
  constructor(page) {
    this.page = page;
    this.adminTab = page.getByRole('link', { name: 'Admin' });
  }
  async goto() { await this.adminTab.click(); }
}

class PIMPage {
  constructor(page) {
    this.page = page;
    this.pimTab = page.getByRole('link', { name: 'PIM' });
  }
  async goto() { await this.pimTab.click(); }
}

class LeavePage {
  constructor(page) {
    this.page = page;
    this.leaveTab = page.getByRole('link', { name: 'Leave' });
  }
  async goto() { await this.leaveTab.click(); }
}

class TimePage {
  constructor(page) {
    this.page = page;
    this.timeTab = page.getByRole('link', { name: 'Time' });
  }
  async goto() { await this.timeTab.click(); }
}

class MyInfoPage {
  constructor(page) {
    this.page = page;
    this.myInfoTab = page.getByRole('link', { name: 'My Info' });
  }
  async goto() { await this.myInfoTab.click(); }
}

class PerformancePage {
  constructor(page) {
    this.page = page;
    this.performanceTab = page.getByRole('link', { name: 'Performance' });
  }
  async goto() { await this.performanceTab.click(); }
}

module.exports = {
  AdminPage,
  PIMPage,
  LeavePage,
  TimePage,
  MyInfoPage,
  PerformancePage
};
