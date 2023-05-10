import assert from 'node:assert'
import fs from 'node:fs/promises'
import { mock, it } from 'node:test'

mock.method(fs, 'readFile', async () => 'Hello World')

it('synchronous passing test', async () => {
  // * This test passes because it does not throw an exception.
  assert.strictEqual(await fs.readFile('a.txt'), 'Hello World')
})
