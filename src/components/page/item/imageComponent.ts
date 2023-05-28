import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section>
						<div class="image__holder"><img class="image__thumbnail" /></div>
						<p class="image__title"></p>
				</section>`);

    const imageElement = this.element.querySelector(
      '.image__thumbnail'
    )! as HTMLImageElement;

    // ❗ XSS attack 보안상의 문제로 사용자에게 입력 받아온 데이터를 innerHTML로 바로 사용하는 것은 위험
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector(
      '.image__title'
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
