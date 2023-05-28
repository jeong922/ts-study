import { ImageComponent } from './components/page/item/imageComponent.js';
import { PageComponent } from './components/page/pageComponent.js';

class App {
  private readonly page: PageComponent;
  constructor(root: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(root);

    const image = new ImageComponent('image title', '../assets/image.jpg');
    image.attachTo(root, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
