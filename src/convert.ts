import * as statusCode from './statusCode.json'

function hasKey<T> (key: keyof any, obj: T): key is keyof T {
  return key in obj
}

function isNumber (value: any): boolean {
  return typeof value === 'number' && isFinite(value)
}

const convert = (code: number): string | null => {
  if (!isNumber(code)) {
    throw new TypeError('Argument type must be number')
  }
  if (hasKey(code, statusCode)) {
    return statusCode[code]
  }
  return null
}

export default convert
