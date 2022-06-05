/* eslint-disable no-undef */
const WBPrivateAPI = require('../src/WBPrivateAPI');

const wbapi = new WBPrivateAPI();

test('Проверка получения 100 товаров со 2 страницы по ключевому запросу "Платье"', async () => {
  const catalog = await wbapi.search('Платье');
  expect(catalog.page(2).length).toBe(100);
});
