import { match } from '../src'

describe('Match', () => {
  it('should be truthy when a valid status code', () => {
    expect(match.informational(100)).toBeTruthy()
    expect(match.success(200)).toBeTruthy()
    expect(match.redirection(300)).toBeTruthy()
    expect(match.clientError(400)).toBeTruthy()
    expect(match.serverError(500)).toBeTruthy()
  })
  it('should be falsy when an invalid status code', () => {
    expect(match.informational(199)).toBeFalsy()
    expect(match.success(299)).toBeFalsy()
    expect(match.redirection(399)).toBeFalsy()
    expect(match.clientError(499)).toBeFalsy()
    expect(match.serverError(599)).toBeFalsy()
  })
})
