/* eslint-env jest */

jest.mock('../request')

const github = require('../github')

describe('#getUser()', () => {
  it('should load user data', () => {
    return github.getUser('vnglst')
    .then(data => {
      expect(data).toBeDefined()
      expect(data.entity.name).toEqual('Koen van Gilst')
    })
  })
})
