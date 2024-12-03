import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'fsk-notes-list',
  styleUrl: 'fsk-notes-list.css',
  shadow: true,
})
export class FskNotesList {
  render() {
    return (
      <Host>
        <slot>Create note</slot>
      </Host>
    );
  }
}
