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


















