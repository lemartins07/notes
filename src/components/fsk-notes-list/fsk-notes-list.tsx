import { Component, Host, h } from '@stencil/core';
import { getList } from '../../library/NotesData';

@Component({
  tag: 'fsk-notes-list',
  styleUrl: 'fsk-notes-list.css',
  shadow: true,
})
export class FskNotesList {
  render() {
    return (
      <Host>
        <div>
          <div>Note List</div>
          <table>
            <thead>
              <tr>
                <th>{getList()}</th>
              </tr>
            </thead>
          </table>
        </div>
      </Host>
    );
  }
}
