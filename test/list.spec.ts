import {list} from '../src';

describe('Informational list', () => {
	it('should be an array', () => {
		expect(Array.isArray(list.informational)).toBe(true);
	});
	it('should contain 100', () => {
		expect(list.informational).toContain(100);
	});
});

describe('Success list', () => {
	it('should be an array', () => {
		expect(Array.isArray(list.success)).toBe(true);
	});
	it('should contain 200', () => {
		expect(list.success).toContain(200);
	});
});

describe('Redirection list', () => {
	it('should be an array', () => {
		expect(Array.isArray(list.redirection)).toBe(true);
	});
	it('should contain 300', () => {
		expect(list.redirection).toContain(300);
	});
});

describe('Client error list', () => {
	it('should be an array', () => {
		expect(Array.isArray(list.clientError)).toBe(true);
	});
	it('should contain 400', () => {
		expect(list.clientError).toContain(400);
	});
});

describe('Server error list', () => {
	it('should be an array', () => {
		expect(Array.isArray(list.serverError)).toBe(true);
	});
	it('should contain 500', () => {
		expect(list.serverError).toContain(500);
	});
});
