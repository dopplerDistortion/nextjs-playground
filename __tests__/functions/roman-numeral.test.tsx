import {integerToRoman} from '@/lib/utils';

test('integerToRoman', () => {
  expect(integerToRoman('1')).toBe('I');
  expect(integerToRoman('4')).toBe('IV');
  expect(integerToRoman('9')).toBe('IX');
  expect(integerToRoman('10')).toBe('X');
  expect(integerToRoman('40')).toBe('XL');
  expect(integerToRoman('50')).toBe('L');
  expect(integerToRoman('90')).toBe('XC');
  expect(integerToRoman('100')).toBe('C');
  expect(integerToRoman('400')).toBe('CD');
  expect(integerToRoman('500')).toBe('D');
  expect(integerToRoman('900')).toBe('CM');
  expect(integerToRoman('1000')).toBe('M');
});
