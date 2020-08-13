const chai = require('chai');
const expect = chai.expect;

const TranslateServiceFactory = require('../../src/factories/TranslationServiceFactory');

describe('translateServiceFactory', () => {
  it('should by Yandex by default', () => {
    expect(TranslateServiceFactory().name).to.equal('YandexTranslateService');
  });

  it('should by Yandex when service does not exist', () => {
    expect(TranslateServiceFactory('DummyService').name).to.equal('YandexTranslateService');
  });

  it('should by MyMemory', () => {
    expect(TranslateServiceFactory('mymemory').name).to.equal('MyMemoryTranslateService');
  });
});
