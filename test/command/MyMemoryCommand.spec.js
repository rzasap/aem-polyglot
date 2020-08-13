const chai = require('chai');
const expect = chai.expect;

const MyMemoryTranslateService = require('../../src/translate/MyMemoryTranslateService');

describe('myMemoryTranslateService specific', () => {
  beforeEach(() => {
    this.myMemoryTranslateService = new MyMemoryTranslateService('dummy');
  });

  it('should generate proper param string', () => {
    const params = this.myMemoryTranslateService.getParams('test', 'en', 'pl');

    expect(params.toString()).to.be.equal('q=test&langpair=en%7Cpl');
  });

  it('should generate proper URL', () => {
    const params = this.myMemoryTranslateService.getParams('test', 'en', 'pl');
    const url = this.myMemoryTranslateService.getUrl(params.toString());

    expect(url).to.be.equal('https://api.mymemory.translated.net/get?q=test&langpair=en%7Cpl');
  });
});
