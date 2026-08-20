import './browser';

const StorageExtras = {
  async getValue(key) {
    return (await this.get(key))[key];
  },
};

export const chromeLocal =
  /*@__PURE__*/Object.assign(browser.storage.local, StorageExtras);
