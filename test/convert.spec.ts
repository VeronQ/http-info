import {convert} from '../src';

describe('Convert', () => {
	it('should match a specific name', () => {
		expect(convert(100)).toBe('Continue');
		expect(convert(200)).toBe('OK');
		expect(convert(300)).toBe('Multiple Choices');
		expect(convert(400)).toBe('Bad Request');
		expect(convert(500)).toBe('Internal Server Error');
	});
	it('should return null if not match', () => {
		expect(convert(199)).toBeNull();
	});
	it('should throw an error in not type number', () => {
		expect(() => {
			// @ts-ignore
			convert([])
		}).toThrowError();
	});
});
