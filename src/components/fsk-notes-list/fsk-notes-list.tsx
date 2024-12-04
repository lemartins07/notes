import { Component, Host, h } from '@stencil/core';
import { getList } from '../../library/NotesData';

@Component({
  tag: 'fsk-notes-list',
  styleUrl: 'fsk-notes-list.css',
  shadow: true,
})
export class FskNotesList {
  render() {
    console.log(getList())
    const notes = getList();
    return (
      <Host>
        <div>
          <div>Note List</div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Date/Time</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note: any) => (
                <tr key={note.id}>
                  <td>{note.id}</td>
                  <td>{note.datetime}</td>
                  <td>{note.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Host>
    );
  }
}
