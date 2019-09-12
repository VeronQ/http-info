import * as statusCode from './statusCode.json'

const codes: string[] = Object.keys(statusCode as object)

function getHttpGroup (pattern: any): number[] {
  return codes
    .filter((n) => pattern.test(n))
    .map((n) => parseInt(n, 10))
}

const informational: number[] = getHttpGroup(/^1/)
const success: number[] = getHttpGroup(/^2/)
const redirection: number[] = getHttpGroup(/^3/)
const clientError: number[] = getHttpGroup(/^4/)
const serverError: number[] = getHttpGroup(/^5/)

export default {
  informational,
  success,
  redirection,
  clientError,
  serverError,
}
