import { BaseComponent } from '../../../component.js';
import { TextData } from '../dialog.js';

export class TextSectionInput
  extends BaseComponent<HTMLElement>
  implements TextData
{
  constructor() {
    super(`<form>
						<div class="form__container">
							<label for="title">Title</label>
							<input type="text" id="title" />
						</div>
						<div class="form__container">
							<label for="text">Text</label>
							<textarea type="text" row="3" id="text"></textarea>
						</div>
					</form>
					`);
  }

  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }

  get text(): string {
    const element = this.element.querySelector('#text')! as HTMLInputElement;
    return element.value;
  }
}
