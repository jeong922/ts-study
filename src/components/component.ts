export interface Component {
  attachTo(parent: HTMLElement, positon?: InsertPosition): void;
}

export class BaseComponent<T extends HTMLElement> implements Component {
  // public : 기본값
  // private : 외부에서 누구도 접근❌
  // protected : 상속한 자식 클래스 내에서는 접근이 가능, 외부에서는 접근❌
  protected readonly element: T;

  constructor(htmlString: string) {
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
