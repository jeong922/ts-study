import { BaseComponent } from './../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, todo: string) {
    super(`<section class="todo">
							<p class="page-item__title todo__title"></p>
							<input type="checkbox" class="todo__checkbox" />
				</section>`);
    const todoTitle = this.element.querySelector(
      '.todo__title'
    )! as HTMLParagraphElement;
    todoTitle.textContent = title;
    const todoElement = this.element.querySelector(
      '.todo__checkbox'
    )! as HTMLInputElement;
    todoElement.insertAdjacentText('afterend', todo);
  }
}
