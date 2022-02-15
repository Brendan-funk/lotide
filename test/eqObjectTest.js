const { eqObjects } = require('../index');
const assert = require('chai').assert;

//-----------TEST CODE----------//
describe('#eqObjects' , () => {

  it('should return true when given two equal objects', () => {
    const obj1 = { a: 1, b: 2};
    const obj2 = { b: 2, a: 1};
    assert.strictEqual(eqObjects(obj1,obj2),true);
  });

  it('should return false when given two different objects', () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 1, c: 2};
    assert.strictEqual(eqObjects(obj1,obj2),false);
  });

  it('should return true when given two equal objects with nested arrays', () => {
    const obj1 = { c: 1, d: [2, 3] };
    const obj2 = { d: [2, 3], c: 1};
    const output = eqObjects(obj1,obj2);
    assert.strictEqual(output,true);
  });

  it('should return false when given two unequal objects with nested arrays', () => {
    const obj1 = { c: 1, d: [2, 4] };
    const obj2 = { d: [2, 3], c: 1};
    assert.strictEqual(eqObjects(obj1,obj2),false);
  });

  it('should return true when given two equal objects with nested objects', () => {
    const obj1 = {
      nested: {
        a: 1,
        b: 2
      },
      c: 3
    };
    const obj2 = {
      nested: {
        a: 1,
        b: 2
      },
      c: 3
    };
    assert.strictEqual(eqObjects(obj1,obj2),true);
  });

  it('should return false when given two unequal objects with nested objects', () => {
    const obj1 = {
      nested: {
        a: 1,
        b: 2
      },
      c: 3
    };
    const obj2 = {
      nested: {
        a: 1,
        b: 3
      },
      c: 3
    };
    assert.strictEqual(eqObjects(obj1,obj2),false);
  });
  
});
