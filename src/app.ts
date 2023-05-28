import { PageComponent } from './components/pageComponent.js';

class App {
  private readonly page: PageComponent;
  constructor(root: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(root);
  }
}

new App(document.querySelector('.document')! as HTMLElement);