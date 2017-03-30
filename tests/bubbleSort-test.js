import { assert } from 'chai';
import { bubble } from '../scripts/bubbleSort.js'
import { randomNumberGenerator } from '../scripts/random-generator.js'
import { randomLetterGenerator } from '../scripts/random-letter-generator.js'

describe('bubbleSort', () => {

  it ('should sort a small generated array from low to high', () => {
    let testArray = randomNumberGenerator(20);
    let bubbleResult = bubble(testArray);

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(results, bubbleResult);
  });

  it('should sort a medium generated array from low to high', () => {
    let testArray = randomNumberGenerator(100);
    let bubbleResult = bubble(testArray);

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(results, bubbleResult);
  });

  it('should sort a large generated array from low to high', () => {
    let testArray = randomNumberGenerator(20000);
    let bubbleResult = bubble(testArray);

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(results, bubbleResult);
  });

  it('should sort a small letter generated array from low to high', () => {
    let testArray = randomLetterGenerator(3);
    let bubbleResult = bubble(testArray);

    let results = testArray.sort(function(a, b) {
      return a - b;
    })

    assert.deepEqual(results, bubbleResult);
  });

});
