import { BaseComponent } from './../../component.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, text: string) {
    super(`<section class="note">
						<div class="note__holder">
							<p class="page-item__title note__title"></p>
							<p class="note__text"></p>
						</div>
				</section>`);
    const noteTitle = this.element.querySelector(
      '.note__title'
    )! as HTMLParagraphElement;
    noteTitle.textContent = title;
    const noteText = this.element.querySelector(
      '.note__text'
    )! as HTMLParagraphElement;
    noteText.textContent = text;
  }
}
