import { VideoComponent } from './components/page/item/videoComponent.js';
import { ImageComponent } from './components/page/item/imageComponent.js';
import { NoteComponent } from './components/page/item/noteComponent.js';
import {
  Composable,
  PageItemComponent,
  PageComponent,
} from './components/page/pageComponent.js';
import { TodoComponent } from './components/page/item/todoComponent.js';
import { Component } from './components/component.js';
import { InputDialog } from './components/page/dialog/dialog.js';
import { MediaSectionInput } from './components/page/dialog/input.ts/mediaInput.js';
import { TextSectionInput } from './components/page/dialog/input.ts/textInput.js';

class App {
  private readonly page: Component & Composable;
  constructor(root: HTMLElement, dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(root);

    // const image = new ImageComponent('image title', '../assets/image.jpg');
    // this.page.addchild(image);
    // const note = new NoteComponent('note title', 'note text');
    // this.page.addchild(note);
    // const todo = new TodoComponent('todo title', 'todo text');
    // this.page.addchild(todo);
    // const video = new VideoComponent('춘식', 'https://youtu.be/nqJaKJYQXVU');
    // this.page.addchild(video);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();
      dialog.addchild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new ImageComponent(mediaSection.title, mediaSection.url);
        this.page.addchild(image);
        dialog.removeFrom(dialogRoot);
      });
    });

    const videoBtn = document.querySelector('#new-video')! as HTMLButtonElement;
    videoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const mediaSection = new MediaSectionInput();
      dialog.addchild(mediaSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new VideoComponent(mediaSection.title, mediaSection.url);
        this.page.addchild(image);
        dialog.removeFrom(dialogRoot);
      });
    });

    const noteBtn = document.querySelector('#new-note')! as HTMLButtonElement;
    noteBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();
      dialog.addchild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new NoteComponent(textSection.title, textSection.text);
        this.page.addchild(image);
        dialog.removeFrom(dialogRoot);
      });
    });

    const todoBtn = document.querySelector('#new-todo')! as HTMLButtonElement;
    todoBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const textSection = new TextSectionInput();
      dialog.addchild(textSection);
      dialog.attachTo(dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const image = new TodoComponent(textSection.title, textSection.text);
        this.page.addchild(image);
        dialog.removeFrom(dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
