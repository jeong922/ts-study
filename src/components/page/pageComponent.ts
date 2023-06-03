import { BaseComponent, Component } from '../component.js';
// interface를 따로 만들어준 이유
// -> coupling 때문!
//  클래스들 간에 서로 커플링이 심하게 되어 있으면 유지보수성, 확정성이 떨어지기 때문
//  클래스에서 주된 규격 사항들을 인터페이스로 정의해 놓고 사용하는 곳에서 인터페이스 이름의 타입으로 지정해 두면
//  다른 구현사항이 생기면 쉽게 다른 클래스로 변환 가능
export interface Composable {
  addchild(child: Component): void;
}
// PageItemComponent 필요한 이유 : 재사용성 때문!
// 나중에 버튼이 필요 없는 경우가 있을때 조건문을 만들거나 하지 않고 컴포넌트를 재사용 가능
type OnCloseListener = () => void;

// SectionContainer는 PageItemComponent의 규격사항 정의
interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements SectionContainer
{
  private closeListener?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
              <div class="page-item__controls">
                <button class="close">✖</button>
              </div>
            <section class="page-item__body">
            </section>
          </li>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.addEventListener('click', () => {
      this.closeListener && this.closeListener();
    });
  }

  addchild(child: Component) {
    const container = this.element.querySelector(
      '.page-item__body'
    )! as HTMLElement;
    child.attachTo(container);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }

  addchild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addchild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
