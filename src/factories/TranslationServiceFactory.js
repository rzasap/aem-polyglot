const YandexTranslateService = require('../translate/YandexTranslateService');
const MyMemoryTranslateService = require('../translate/MyMemoryTranslateService');

const serviceMap = {
  yandex: YandexTranslateService,
  mymemory: MyMemoryTranslateService
};

function TranslateServiceFactory (service = 'yandex') {
  const translateService = serviceMap[service] || YandexTranslateService;

  return translateService;
}

module.exports = TranslateServiceFactory;
