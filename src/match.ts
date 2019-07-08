import * as statusCode from './statusCode.json';

const codes: string[] = Object.keys(statusCode as object);

function isHttpGroup(code: number, pattern: any): boolean {
	return codes
		.filter((n) => pattern.test(n))
		.includes(code.toString());
}

const informational = (code: number): boolean => isHttpGroup(code, /^1/);
const success = (code: number): boolean => isHttpGroup(code, /^2/);
const redirection = (code: number): boolean => isHttpGroup(code, /^3/);
const clientError = (code: number): boolean => isHttpGroup(code, /^4/);
const serverError = (code: number): boolean => isHttpGroup(code, /^5/);

const anyGroup = (code: number): boolean => {
	return codes.includes(code.toString());
};

export default {
	informational,
	success,
	redirection,
	clientError,
	serverError,
	_any: anyGroup,
};
