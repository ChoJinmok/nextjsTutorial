// react, react-dom, next 세가지를 install 후 다음을 삭제해도 동작한다.
// 1. react and react-dom scripts: NPM과 함께 설치했기 때문
// 2. <html>, <body>: Next.js가 자동으로 생성해준다.
// 3. app element, ReactDOM.render()
// 4. Babel script: Next.js에는 JSX를 브라우저가 이해할 수 있는 JavaScript으로 변환하는 컴파일러가 있기 때문
// 5. <script type="text/jsx"> tag
// 6. React.useState(0)의 'React.': 상단에 import { useState }추가해줘야함
// => HTML 파일에 남아 있는 코드가 JSX이므로 파일 형식을 .html에서 .js 또는 .jsx로 변경할 수 있다.

// Next.js 앱으로 완전히 전환하기 위해 해야 할 세 가지 추가 작업
// 1. index.js 파일을 'pages'라는 새 폴더로 이동(나중에 자세히 설명).
// 2. main React component에 export default를 추가하여
//  Next.js가 이 페이지의 main component로 렌더링할 component를 구별할 수 있도록 한다.
// 3. 개발하는 동안 Next.js 개발 서버를 실행하려면 package.json 파일에 스크립트를 추가 ("next dev")

// Running the development server
// 잘 작동하는지 확인하려면 터미널에서 npm run dev를 실행하고 브라우저에서 localhost:3000으로 이동하여 앱을 확인 한다.
// 파일을 변경하고 저장하면 변경 사항이 브라우저에 자동으로 반영 업데이트된다.
// => 이 기능을 'Fast Refresh'라고 한다. 수정 사항에 대한 즉각적인 피드백을 제공하며 Next.js로 pre-configured(미리 구성)되어 제공된다.

// React는 modern interactive UI를 빌드하기 위한 필수적인 요소들을 제공하는 라이브러리이다.
// 그러나 생성한 UI를 어플리케이션에 결합하는 작업은 여전히 필요하다.
// 앞선 작업을 보면 이미 Next.js 사용의 이점을 느낄 수 있다.
// 1. 복잡한 도구인 babel 스크립트를 제거함으로써 더 이상 babel에대해 생각할 필요가 없어졌다.
// 2. 'Fast Refresh'가 잘 작동하는 것을 보았다.

import { useState } from 'react';

function Header({ title }) {
  return <h1>{title || 'Default title'}</h1>;
}

export default function HomePage() {
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

      <button type="button" onClick={handleClick}>
        Like (
        {likes}
        )
      </button>
    </div>
  );
}
