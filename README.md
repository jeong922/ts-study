TypeScript, OOP 공부용...

## OOP(Object Oriented Programming)

- 프로그램을 객체로 정의해서 객체들끼리 서로 의사소통하도록 디자인하고 코딩해 나가는 것
- 서로 관련 있는 데이터와 함수를 여러가지 오프젝트로 정의해서 프로그래밍 해나감
- 한곳에서 문제가 생긴다면 관련 있는 오브젝트만 수정하면됨
- 여러번 **반복되는 것**이 있다면 관련된 오브젝트를 **재사용 가능**
- 새로운 기능이 필요하다면 새로운 오브젝트를 다시 만들면 되므로 **확장성이 높음**

### 객체지향 원칙

- **Encapsultaion(캡슐화)**

  - 변수와 함수를 하나의 단위로 묶는 것
  - 서로 관련 있는 데이터와 함수를 한 오브젝트 안에 담아 두고 외부에서 보일 필요가 없는 데이터를 잘 숨겨 놓음으로써 캡슐화 할 수 있음
  - 내부 상태를 외부에서 변경 할 수는 없지만 외부 함수를 통해서 내부 상태를 변경 할 수 있음

- **Abstraction(추상화)**

  - 불필요한 정보는 숨기고 중요한 정보만을 표현함으로써 프로그램을 간단히 만드는 것
  - 내부의 복잡한 기능을 다 이해하지 않고 외부에서 간단한 인터페이스를 통해 쓸 수 있는 것
  - 외부에서는 내부에서 어떻게 구현 되어져 있는지 얼마나 복잡한지 이런 것들을 신경쓰지 않고 지정된 외부에서만 보이는 인터페이스 함수를 이용해 오브젝트를 사용 할 수 있는 것

- **Inheritance(상속)**
  - 상속을 이용하면 기존 클래스 재사용 가능
  - 상속하는 기존 클래스 : parent class, super class, base class
  - 상속 받은 새로운 클래스 : child class, sub class, derived class
  - IS-A : 상속 받은 자식 클래스는 바로 부모 클래스라고 말할 수도 있음
  - 브라우저에서 사용하는 DOM 요소도 상속으로 구현되어 있음
  - 모든 DOM 요소들은 EventTarget을 상속하기 때문에 모든 요소들에서 이벤트가 발생 할 수 있음.
- **Polymorphism(다형성)**
  - 공통된 메서드를 통해서 접근이 가능하고 그 메서드를 실행할때 결과가 다를 수 있는 것

### 의존성 주입(DI, Dependency Injection)

- A가 B에 의존성이 있다는 것은 B의 변경 사항에 대해 A 또한 변해야 된다는 것을 의미
- 의존성 주입을 통해 상위 모듈은 하위 모듈에 대한 의존성이 떨어지게 됨 → **디커플링**

- **장점**
  - 모듈들을 쉽게 교체할 수 있는 구조가 되어 테스팅하기 쉽고 마이그레이션하기도 수월
  - 구현할 때 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어 주기 때문에 애플리케이션 의존성 방향이 일관되고 애플리케이션을 쉽게 추론할 수 있으며, 모듈 간의 관계들을 조금 더 명확하게 해줌.
- **단점**
  - 모듈들이 더욱더 분리되므로 클래스 수가 늘어나 복잡성이 증가 할 수 있며 약간의 런타임 패널티가 생기기도 함.
- **원칙**
  - 상위 모듈은 하위 모듈에서 어떠한 것도 가져오지 않아야 함.
  - 둘 다 추상화에 의존해야 하며, 이때 추상화는 세부 사항에 의존하지 않아야 함.

### interface vs type alias

- 특정한 규격을 구현해야 한다면 interface를 사용하는 것이 좋음
- 데이터의 타입을 결정한다면 type을 사용하는 것이 좋음

- 하지만 **공식문서**에 "For the most part, you can choose based on personal preference, and TypeScript will tell you if it needs something to be the other kind of declaration. If you would like a heuristic, use interface until you need to use features from type."이라고 나와있다.

- interface의 대부분의 기능은 type에서도 동일하게 사용가능하지만 type은 동일한 이름으로 재선언 불가능

```TypeScript
interface AnimalInterface {
  name: string;
}

type AnimalType = {
  name: string;
};

// interface type 둘다 object 가능
const obj1: AnimalInterface = {
  name: 'Choonsik',
  age: 3,
};
const obj2: AnimalType = {
  name: 'Choonsik',
};

// interface type 둘다 class 가능
class Animal1 implements AnimalInterface {
  name: string;
  age: number;
}

class Animal2 implements AnimalType {
  name: string;
}

// interface type 둘다 확장 가능
interface BearInterface extends AnimalInterface {
  honey: boolean;
}

type BearType = AnimalType & {
  honey: boolean;
};

// interface만 재선언 가능
interface AnimalInterface {
  age: number;
}

// type AnimalType = {

// };

// computed properties (type만 가능)
type Person = {
  name: string;
  age: number;
};

// computed properties (type만 가능)
type Person = {
  name: string;
  age: number;
};

type Name = Person['name'];

type NumberType = number;

type Direction = 'left' | 'right';

```
