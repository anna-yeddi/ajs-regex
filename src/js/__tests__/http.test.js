import { httpGet, httpPost } from '../http'; 

test('should throw while calling httpGet', () => {
  const url = 'test.com';

  expect(() => httpGet(url)).toThrow('test.com')
  expect(() => httpGet("url")).toThrow(Error)
})

test('should throw while calling httpPost', () => {
  const url = 'test.com';

  expect(() => httpPost(url)).toThrow(Error)
  expect(() => httpPost("url")).toThrow("url")
})