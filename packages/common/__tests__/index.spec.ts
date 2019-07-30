import { add, greet } from '../src';

describe('common module', () => {
  it('should add', () => {
    expect(add(2, 3)).toEqual(5);
  });
  it('should greet', () => {
    expect(greet('world')).toEqual('common says: hello to world');
  })

})
