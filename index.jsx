// react, react-dom, next 세가지를 install 후 다음을 삭제해도 동작한다.
// 1. react and react-dom scripts: NPM과 함께 설치했기 때문
// 2. <html>, <body>: Next.js가 자동으로 생성해준다.
// 3. app element, ReactDOM.render()
// 4. Babel script: Next.js에는 JSX를 브라우저가 이해할 수 있는 JavaScript으로 변환하는 컴파일러가 있기 때문
// 5. <script type="text/jsx"> tag
// 6. React.useState(0)의 'React.': 상단에 import { useState }추가해줘야함
// => HTML 파일에 남아 있는 코드가 JSX이므로 파일 형식을 .html에서 .js 또는 .jsx로 변경할 수 있다.

import { useState } from 'react';
function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>;
}

function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <Header title="Develop. Preview. Ship. 🚀" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
