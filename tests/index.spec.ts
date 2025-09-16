import { createSemverComparator } from '../src';

describe('semver comparator', () => {
  const comparator = createSemverComparator('1.2.3');

  it('create', () => {
    expect(comparator.value === '1.2.3');
  });

  it('eq', () => {
    expect(comparator.eq('1.2.3')).toBe(true);
    expect(comparator.eq('2.0.9')).toBe(false);
  });

  it('gt', () => {
    expect(comparator.gt('1.2.2')).toBe(true);
    expect(comparator.gt('1.2.3')).toBe(false);
    expect(comparator.gt('1.2.4')).toBe(false);
  });

  it('gte', () => {
    expect(comparator.gte('1.2.2')).toBe(true);
    expect(comparator.gte('1.2.3')).toBe(true);
    expect(comparator.gte('1.2.4')).toBe(false);
  });

  it('lt', () => {
    expect(comparator.lt('1.2.2')).toBe(false);
    expect(comparator.lt('1.2.3')).toBe(false);
    expect(comparator.lt('1.2.4')).toBe(true);
  });

  it('lte', () => {
    expect(comparator.lte('1.2.2')).toBe(false);
    expect(comparator.lte('1.2.3')).toBe(true);
    expect(comparator.lte('1.2.4')).toBe(true);
  });

  it('subtract', () => {
    expect(comparator.subtract('1.2.2')).toBe(1);
    expect(comparator.subtract('1.2.3')).toBe(0);
    expect(comparator.subtract('1.2.4')).toBe(-1);
  });

  it('fill', () => {
    expect(comparator.gt('1')).toBe(true);
    expect(comparator.gt('1.2')).toBe(true);
    expect(comparator.lt('1.2.3.1')).toBe(true);
    expect(comparator.eq('1.2.3.0')).toBe(true);
  });
});
