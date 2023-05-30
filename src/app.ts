import { VideoComponent } from './components/page/item/videoComponent.js';
import { ImageComponent } from './components/page/item/imageComponent.js';
import { NoteComponent } from './components/page/item/noteComponent.js';
import { Composable, PageComponent } from './components/page/pageComponent.js';
import { TodoComponent } from './components/page/item/todoComponent.js';
import { Component } from './components/component';

class App {
  private readonly page: Component & Composable;
  constructor(root: HTMLElement) {
    // 이렇게 바로 생성하는 것보다 dependency injection을 사용하는 것이 좋음
    this.page = new PageComponent();
    this.page.attachTo(root);

    const image = new ImageComponent('image title', '../assets/image.jpg');
    this.page.addchild(image);
    const note = new NoteComponent('note title', 'note text');
    this.page.addchild(note);
    const todo = new TodoComponent('todo title', 'todo text');
    this.page.addchild(todo);
    const video = new VideoComponent('춘식', 'https://youtu.be/nqJaKJYQXVU');
    this.page.addchild(video);
  }
}

new App(document.querySelector('.document')! as HTMLElement);
