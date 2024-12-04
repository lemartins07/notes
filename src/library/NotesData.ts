/**
 * Data library for Notes
 * @packageDocumentation
 */

const list = `
  [
    { "id": "1", "datetime": "2020-03-01T10:10Z", "title": "Title 1" },
    { "id": "2", "datetime": "2020-04-01T10:10Z", "title": "Title 2" },
    { "id": "3", "datetime": "2020-05-01T10:10Z", "title": "Title 3" },
    { "id": "4", "datetime": "2020-06-01T10:10Z", "title": "Title 4" }
  ]
`
/**
 * Returns a list of all the notes.
 */
export function getList() {
  return JSON.parse(list)
}
