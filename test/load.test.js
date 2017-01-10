import { describe, it } from 'mocha';
import { expect } from 'chai';
import { load } from '../index.js';

describe('Test json load', () => {
  it('Test load method', (done) => {
    const loadedList = load('./test/test.json');
    expect(loadedList[0].id).to.equal(1);
    expect(loadedList[0].firstName).to.equal('Dana');
    expect(loadedList[0].lastName).to.equal('Monroe');
    expect(loadedList[0].country).to.equal('USA');
    done();
  });
});
