node -v
npm -v

npm 초기화 명령어 
- npm init : npm 초기화하기. package.json으로 직접 control 가능 
 npm init -y : 아무것도 없는 기본 package.json 생성해줌 !!

 npm 설치 명령어 
 npm install 
 ex) npm i jquery  : 특정 라이브러리 설치하는 명령어 

 처음 시도시 node_modules 생성됨. 그 밑에 jquery 폴더에 라이브러리 설치됨

 일반적으로 특정 라이브러리가 설치되었을 때, 라이브러리명과 같은 폴더에 라이브러리가 설치됨. 
 AND 
 package.json에 dependency 추가됨. 라이브러리명과 버전까지 명시.


왜 npm으로 라이브러리 관리하는 것이 좋을까

장점1.
html에 script를 가지고 필요시 그때그때 라이브러리를 src로 가져온다면 
관리하기 굉장히 힘듬. 특히 버전관리. 
즉, 라이브러리간의 의존관계들, 서로의 영향도가 있을 때 관리 중요.
따라서 package.json에 정리가 깔끔하게 되어있다면 이 프로젝트에서 쓰는 라이브러리 목록과 버전을 쉽게 파악할 수 있기때문에 좋음. 

장점2
해당 라이브러리 페이지에 가서 일일히 주소 가져오지 않아도 install로 설치했을 때 내 로컬 개발 환경에 node_modules 밑에 필요한 라이브러리가 설치돼서 바로 그 라이브러리를 사용할 수 있다는 장점.
cdn으로 그떄그때 가져오는 것 번거로움 줄임


npm 정리 !
npm : 명령어로 자바스크립트 라이브러리 설치, 괸리 
(패키지 == 라이브러리 )

dependencies : 의존성
devDependencies : 개발환경 의존성 


npm 지역 설치 명령어 
ex)
npm install gulp 
npm uninstall gulp -> 설치를 하고 난 뒤 지우는 명령어 
                        dependencies에서 사라지고, node_modules에서 관련 소스 다 사라짐

npm 전역 설치 명령어
npm i 라이브러리 (설치옵션)
ex) npm i gulp --g
    npm i gulp --global

    -> 해당 node_modules에 설치되는 것이 아님 따라서 라이브러리 이 플젝 안에서 확인은 불가. 전역 설치이기 때문.
    그렇다면 어디 설치 ?
    -> 
    # window
    %USERPROFILE%\AppData\Roaming\npm\node_modules

    명령어 기능들을 활용하기 위하여 글로벌로 많이 설치.
    시스템 레벨에 전역으로 설치하는 이유임. 



* 지역  정석 설치 명령어 
npm install 라이브러리명 --save-prod
( --save-prod 는 생략가능. 이걸 안쳐도 이걸 친것으로 여겨줌.)
npm i 라이브러리명 
위 명령어와 동일 효과 


* 전역 설치 
* 시스템 레벨에서 사용할 자바스크립트 라이브러리 
npm install 라이브러리명 --global


노드 모듈에 들어가느냐. 로컬 주어진 경로에 설치되느냐의 차이


* 지역 설치 명령어 옵션 2가지 
자주 사용되는 옵션 2가지
1. --save-prod (default)
2. --save-dev 
-> 축약 문법 
1. --save-prod  === 생략
2. --save-dev === -D
npm i vue --save-prod === npm i vue 
npm i vue --save-dev === npm i vue -D

!! dev로 설치한다면
package.json에 dependencies가 아닌 devDependencoes에 들어감.
node_modules에는 그 라이브러리가 prod와 동일하게 설치됨.

prod 와 dev 무슨 차이 ?
-> dependencies : 어플리케이션이 동작하는데 직접 관여함. 화면의 로직과 맞닿아있는 라이브러리들. 어플리케이션을 동작하는데 필요한 라이브러리 
dev-dependencies : ex) webpack, js-compression, sass
                    : 개발을 할 때 도움을 줌. 개발 도움 라이브러리 

    따라서 dependencies와 dev-dependencies에 들어가는 라이브러리 성격이 다름. 

* 개발용 라이브러리(dev-dependencies)와 배포용 라이브러리(dependencies) 구분하기 
dev-dependencies는 빌드하고 최종 서버에 배포될 때 생략됨.
어플리케이션 구동에 관여하지 않으면 dependencies에 넣지 않는것이 빌드 시간 단축에 도움이 됨. 
따라서 주의해야함!!!!
해당 라이브러리 안내서를 참조하여 dependencies 선택 진행하는 것이 좋지만 스스로 판단하여 직접 연관이 없으면 dev로 빼도 좋음.


** 웹팩

* 웹팩이란?
프론트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러 

모듈 번들러란 웹 애플리케이션 구성하는 자원(HTML, CSS, Javascript, Images 등) 을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구를 의미. 

모듈 번들링 : 자원들을 하나의 파일로 병합 및 압축. 
번들 : 자원들의 연관관계를 다 파악해서 하나로  합쳐줌. (웹팩 핸드북 참조)
번들러 : 모든 파일들을 해석하여 연관관계를 다 파악해줌...!!

웹팩 튜토리얼 
- lodash : 자바스크립트 유틸리티 라이브러리 

웹팩 빌드 명령어를 실행하기 위해 build script 추가 
AND
npm run build 
(npm run webpack)

mode란 ?
none, development, production 세가지 존재.

- 웹팩 적용 후, 적용 전 차이 ?
유관상으로는 차이가 없음.
-----------------------------------------------------
network pannel에서 차이 확인 가능 
before : request 5개, after : request 3개
이미 페이지를 로딩할 때 request 수 차이가 남.
웹팩을 사용하여 자바스크립트 파일을 하나로 합친다음에 리퀘스트 요청 진행하여 성능 차이를 가져오게 됨. 
-----------------------------------------------------
빌드 결과의 차이 
dist/main.js => 웹팩으로 변환한 결과 파일 
전체적인 윤곽만 보고 웹팩의 역할 추측, 이해 가능 

익명함수 ( IIFE : 즉시 실행 함수 )
main.js는 즉시실행함수 두개로 구성되어있음.

첫 익명함수 : 웹팩 내부의 코드들. 살펴볼 필요 크지 않음 
두번째 익명함수 : 실제로 코드 변환들이 이루어짐. 번호가 매겨져있음. 
1번 : webpack으로 라이브러리들 합침. 변환 

* 웹팩 소개 영상 
throttling : 네트워크 가상 환경 설정! 
webpack : 자바스크립트 대상이 아니라 웹페이지를 구성하는 모든 리소스들에 대해서 웹팩으로 동작 제어가 가능하다. 

js 
minifiers : 자바스크립트 파일 압축 과정. 더 빠른 속도 향상을 위하여 진행하는 과정 
linters : 문법 보조 검사 도구. 에러가 좀 더 없는 방향으로 작성 가능 
complie-to-js languages : 모든 브라우저에서 사용 가능한 자바스크립트 버전으로 변환해주어야 함.

- 웹팩으로 해결하려는 문제 
자바스크립트 변수 유효 범위 
브라우저별 HTTP 요청 숫자의 제약
사용하지 않는 코드 관리
Dynamic Loading & Lazy Loading 미지원 

es6의 import & export 
자바스크립트의 모듈을 언어 레벨에서 잘 구현해놓은 스펙이 import & export! 

babel : 자바스크립트의 최신 문법들을 최대한 많은 브라우저가 호환할 수 있게 변환해주는 도구 
es6문법을 브라우저 호환 가능한 js로 변환해줌!!

modules문법 
키워드 : import, export 
export 변수 ,함수 
-> 내보내기
import : 특정 파일에서 내보낸 변수, 함수 가져다 쓰는 문법 

변수 들고 오기 
import { pi } from './math.js'

따라서 변수의 유효 범위가 구분이 됨.
각 파일별로 선언해서 사용하기 때문에 관리 수월.

특정 파일 경로에서 변수나 함수 들고올 수 있음

이것들이 modules의 장점 및 개념 !
-------------------------
실습 : es6-modules 참고!
npm i : package.json에 정의되어 있는 라이브러리들을 설치해줌. npm이라는 자바스크립트 공개 저장소에서 다운로드됨

--------------------------------
빌드 === 컴파일 === 번들링 === 변환 
다같은의미!!
-> 웹팩이란? 페이지의 맨 마지막에 이 내용 있음. 참고!!

entry : 웹팩을 돌리기 위한 진입점!! 번들링을 시작하는 진입점! 

output : 번들링이 끝난 후의 파일 경로. 파일경로(path), 이름 등 정의. 즉 결과물!

loader : 빌드할 때 파일간의 관계 파악할 때(웹팩으로 웹 서비스를 변환할 때) 자바스크립트가 아닌 파일들의 변환을 도와주는 속성 

------------------------------------

webpack 명령어 쳤을 때 로그 보는 법 
특정 빌드마다 고유 hash 생김
Asset chunk 
모듈의 해석 순서대로 번들링한 순서 나옴.

loader : js 파일이 아닌 파일을 웹팩 안으로 변환할 수 있게 적용해주는 속성,도구

webpack.config.js 파일 다시 분석 
mode : production, development, none ( 배포할 때는 꼭 production으로..)
entry : 진입점
output : 결과물 파일 (chunckhash : 고유값 가지고 번들링된 파일 넘버링 유용)


module 속 rules 밑 배열에 들어가는 것들이 하나의 로더 규칙. 배열 형태로 로더 규칙들이 들어가는 문법. 

ex) 모든 css 파일에 style-loader와 css-loader를 사용하겠다는 문법.
module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

--> 이게 없으면 error가 발생을 함.
    base.css를 웹팩으로 돌리려고 하는데, js 파일이 아니기때문에 돌릴 수 없어서 에러 발생. -> loader 설정해주라고 hint. 이대로는 해석이 불가능하기 때문에. 
    css-loader만 use해도 에러는 나지 않음. 웹팩에서 css 인식가능하게 됨. 하지만 해당 스타일이 반영,적용은 되지 않음. style-loader use하지 않기 떄문에 

    use: ['css-loader', 'style-loader'] 로 순서를 반대로 하면 에러가 뜸! 

    왜? : style-loader의 역할 때문 
        style-loader의 역할 : 웹팩안에 들어간 스타일 코드를 ( css-loader를 통해) head안에 inline 스타일로 박아주는 것!
        ex)
        <head>
            <meta charset="utf-8">
            <title>CSS &amp; Libraries Code Splitting</title>
                <style>
                p {
                    color : blue;
                }
                </style>
        </head>
        따라서 css-loader를 통해 웹팩으로 적용해주는 속성 로더 먼저 해준 후, 적용 가능한 style-loader를 통해 적용하면 정상 처리됨.
        로더의 순서 연관 있음. 오른쪽에서 왼쪽으로 적용이 됨. 

plugin 사용하여 css 파일을 bundle.js에서 분리. (따로 생성)
webpack의 plugin : 결과물을 변경하여 우리에게 제공해줄 수 있구나..
                 결과물의 형태를 바꾸거나, 결과물에 부가적인 정보를 제공해줌.
        
      
  webpack 4가지 속성 리뷰 : (핸드북의 concepts review 참고 )
                            entry : 
                            output : 
                            loader : js 아닌 파일들 번들링 도와줌 (비js파일을 웹팩에 이식 시켜줌 )
                            plugin : 결과물을 변형 (추가적인 정보 삽입)
                                    물론 결과물에게뿐 아니라 전 과정에서 영향 미칠 수 있음. 개념은 그렇다는것..
webpack 공식 사이트 참고하여 사용하기!! + webpack git (webpack file loader에 대한 소스 있음) 
  plugin & loader들 ~~ 다 ~~ 있음!!

---------------------------------------------------------------
웹팩 데브 서버 !! 
웹 ㅇ애플리케이션 개발하는 과정에서 유용하게 쓰이는 도구 
웹팩의 빌드 대상 파일이 변경되었을 때 웹팩 명령어 사용하지 않아도 빌드하여 결과물 실행시켜줌

실습 진행 결과 : localhost:9000번에서 실행이 됨. 
            
    webpack-dev-server의 특징 2가지 
    1. 저장하는 순간 ( 파일 변경하는 순간) 바로 웹팩 빌드 & 브라우저 새로고침 ( 컴파일 바로 진행됨)
    2. 인메모리 기반으로 웹팩의 빌드 결과를 올려놓음. 파일 생성 안됨!
      ex. bundle.js 등의 파일 확인 불가. 인메모리에 존재. 저장 안되기 때문에 저장 or 파일 시스템으로 확인 관리하고 싶다면 npm run build(webpack)를 해주어야 함











