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
import {
  InputDialog,
  MediaData,
  TextData,
} from './components/page/dialog/dialog.js';
import { MediaSectionInput } from './components/page/dialog/input.ts/mediaInput.js';
import { TextSectionInput } from './components/page/dialog/input.ts/textInput.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;
  constructor(root: HTMLElement, private dialogRoot: HTMLElement) {
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

    this.bindElementToDialog<MediaSectionInput>(
      '#new-image',
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );
    this.bindElementToDialog<MediaSectionInput>(
      '#new-video',
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-todo',
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.text)
    );

    this.bindElementToDialog<TextSectionInput>(
      '#new-note',
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.text)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    inputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const element = document.querySelector(selector)! as HTMLButtonElement;
    element.addEventListener('click', () => {
      const dialog = new InputDialog();
      const input = new inputComponent();
      dialog.addchild(input);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const element = makeSection(input);
        this.page.addchild(element);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.document')! as HTMLElement, document.body);
