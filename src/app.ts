import { VideoComponent } from './components/page/item/videoComponent.js';
import { ImageComponent } from './components/page/item/imageComponent.js';
import { NoteComponent } from './components/page/item/noteComponent.js';
import { PageComponent } from './components/page/pageComponent.js';
import { TodoComponent } from './components/page/item/todoComponent.js';

class App {
  private readonly page: PageComponent;
  constructor(root: HTMLElement) {
    this.page = new PageComponent();
    this.page.attachTo(root);

    const image = new ImageComponent('image title', '../assets/image.jpg');
    image.attachTo(root, 'beforeend');
    const note = new NoteComponent('note title', 'note text');
    note.attachTo(root, 'beforeend');
    const todo = new TodoComponent('todo title', 'todo text');
    todo.attachTo(root, 'beforeend');
    const video = new VideoComponent('춘식', 'https://youtu.be/nqJaKJYQXVU');
    video.attachTo(root, 'beforeend');
  }
}

new App(document.querySelector('.document')! as HTMLElement);
