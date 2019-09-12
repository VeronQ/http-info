# HTTP Info

> HTTP Status Codes Utility

[![Build Status](https://travis-ci.com/VeronQ/http-info.svg?token=AEFpxy9csD94RqFQtSSp&branch=master)](https://travis-ci.com/VeronQ/http-info)
[![npm version](https://badge.fury.io/js/http-info.svg)](https://npmjs.org/package/http-info "View this project on npm")
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/VeronQ/http-info/blob/master/LICENSE)

A set of utility that allow to match, convert and list HTTP status codes. 
 
Complete list of **HTTP Status Codes** [can be found here](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml).

## Installation

```sh
$ npm install http-info
```

## Usage

```js
import httpInfo from 'http-info'

// Convert
httpInfo.convert(100) // => Continue

// Match
httpInfo.match.redirection(300) // => true

// List
httpInfo.list.serverError // => [500, 501, 502, 504, 505, 506, 507, 508, 510, 511]
```

## API

### convert(code)

Convert any HTTP code to its status message.

##### Code

type `number`

##### Return

`string` | `null`

##### Example

```js
httpInfo.convert(100) // => Continue
httpInfo.convert(301) // => Moved Permanently

// False value will return null
httpInfo.convert(600) // => null
```

### match\[\<group>](code)

Returns whether an HTTP code exists in the specified group.

##### Group

`informational`, `success`, `redirection`, `clientError`, `serverError`, `_any`

##### Code

type `number`

##### Return

`boolean`

##### Example

```js
httpInfo.match.clientError(404) // => true
httpInfo.match.success(500) // => false

// To check for all groups, use `_any`
httpInfo.match._any(100) // => true
```

### list[\<group>]

##### Group

`informational`, `success`, `redirection`, `clientError`, `serverError`

##### Return

`array`

##### Example

```js
httpInfo.list.success // => [200, 201, 202, ...]
httpInfo.list.serverError // ==> [500, 501, 502, ...]
```

## License

[MIT](https://github.com/VeronQ/http-info/blob/master/LICENSE)
