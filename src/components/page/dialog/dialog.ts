import { BaseComponent, Component } from '../../component.js';
import { Composable } from '../pageComponent';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly text: string;
}
export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
						<div class="dialog__container">
							<button class="close">✖</button>
							<div id="dialog__body"></div>
							<button class="dialog__submit">ADD</button>
						</div>
					</dialog>`);

    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    closeBtn.addEventListener('click', () => {
      this.closeListener && this.closeListener();
    });

    const submitBtn = this.element.querySelector(
      '.dialog__submit'
    )! as HTMLElement;
    submitBtn.addEventListener('click', () => {
      this.submitListener && this.submitListener();
    });
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addchild(child: Component) {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body);
  }
}
