## jQuery 개요
### 1. 제이쿼리(jQuery)
* 존 레식에 의해 개발된 오픈 소스 기반의 JavaScript 라이브러리이다.
* 제이쿼리를 사용하면 HTML DOM을 쉽게 조작할 수 있고 CSS 스타일도 쉽게 설정할 수 있다.
* AJAX 애플리케이션을 쉽게 구현할 수 있으며 플러그인을 통한 애니메이션 효과 기능을 구현할 수 있다.
### 2. 제이쿼리 적용
* CDN(Content Delivery Network)을 통해 제이쿼리를 적용하는 방법
  ```html
  <script src="https://code.jquery.com/jquery-3.6.0.js" ></script>
  ```
* jQuery 홈페이지(https://jquery.com/)에서 제이쿼리를 다운로드해 적용하는 방법 
  ```html
  <script src="jquery-3.6.0.js" ></script>
  ```
### 3. 제이쿼리 시작
* 제이쿼리를 사용하려면 $ 또는 jQuery 식별자를 통해 제이쿼리에 접근해야 한다.
  ```js
  // 기본 작성 형태
  $('선택자').css('속성', '속성값');
  ```
* 제이쿼리는 ready 메소드를 통해 웹 문서의 모든 요소가 로드 된 후에 실행되어야 한다. (window.onload 속성과 같은 개념)
  ```js
  $(document).ready(function(){
    // 실행 코드
  });

  jQuery(document).ready(function(){
    // 실행 코드
  });
  ```
* ready 메소드는 아래와 같이 축약해서 작성도 가능하다.
  ```js
  $(function(){
    // 실행 코드
  });
  ```
## 객체 탐색
### 1. filtering 메소드
* 선택자로 지정한 객체 그룹에서 위치를 가지고 객체를 선택하는 메소드이다.
  |메소드|내용|
  |--|--|
  |$('선택자').first()|선택된 요소들 중 첫 번째 요소를 리턴한다.|
  |$('선택자').last()|선택된 요소들 중 마지막 번째 요소를 리턴한다.|
  |$('선택자').eq(n)|선택된 요소들 중 인덱스 번호와 일치하는 요소를 리턴한다.(0부터 시작)|
  |$('선택자').filter('선택자')|선택된 요소들 중 인자 값과 일치하는 요소 리턴한다.|
  |$('선택자').not('선택자')|선택된 요소들 중 인자 값과 일치하지 않는 요소를 리턴한다.|
  |$('선택자').is('선택자')|선택된 요소들 중 인자 값과 일치하는 요소가 있는지 확인한다. (true, false를 리턴)|  
### 2. Ancestors 메소드
* 선택된 요소의 상위 요소들을 선택할 수 있는 메소드이다.
  |메소드|내용|
  |--|--|
  |$('선택자').parent()|선택된 요소의 바로 위 상위 요소를 리턴한다.|
  |$('선택자').parents(['선택자'])|선택된 요소의 모든 상위 요소를 리턴하거나,<br>매개변수가 있으면 매개변수와 일치하는 상위 요소만 리턴한다.|
  |$('선택자').parentsUntil(['선택자'])|선택된 요소의 모든 상위 요소를 리턴하거나,<br>매개변수가 있으면 선택된 요소부터 매개변수와 일치하는 요소까지의 상위 요소를 리턴한다.|
### 3. Descendants 메소드
* 선택된 요소의 하위 요소들을 선택할 수 있는 메소드이다.
  |메소드|내용|
  |--|--|
  |$('선택자').children(['선택자'])|선택된 요소의 모든 자식 요소를 리턴하거나<br>매개변수가 있으면 매개변수와 일치하는 자식 요소만 리턴한다.|
  |$('선택자').find('선택자')|선택된 요소의 하위 요소 중 매개변수와 일치하는 모든 하위 요소를 리턴한다.|
### 4. Sideways 메소드
* 선택된 요소와 같은 레벨에 있는 요소를 선택할 수 있는 메소드이다.
  |메소드|내용|
  |--|--|
  |$('선택자').siblings(['선택자'])|선택된 요소와 같은 레벨에 있는 모든 요소를 리턴하거나<br>매개변수가 있으면 같은 레벨 요소 중 매개변수와 일치하는 요소를 리턴한다.|
  |$('선택자').next()|선택된 요소의 같은 레벨 요소 중 다음 한 개 요소를 리턴한다.|
  |$('선택자').nextAll()|선택된 요소와 같은 레벨 요소 중 다음의 모든 요소를 리턴한다.|
  |$('선택자').nextUntil(['선택자'])|선택된 요소와 같은 레벨 요소 중 다음의 모든 요소를 리턴하거나,<br>매개변수가 있으면 같은 레벨의 다음 요소 중 매개변수와 일치하는 요소까지 리턴한다.|
  |$('선택자').prev()|선택된 요소와 같은 레벨 요소 중 이전의 한 개 요소를 리턴한다.|
  |$('선택자').prevAll()|선택된 요소와 같은 레벨 요소 중 이전의 모든 요소를 리턴한다.|
  |$('선택자').prevUntil(['선택자'])|선택된 요소의 같은 레벨 요소 중 이전의 모든 요소를 리턴하거나,<br>매개변수가 있으면 같은 레벨의 이전 요소 중 매개변수와 일치하는 요소까지 리턴한다.|
## 객체 조작
### 1. Content 설정
#### 1.1. html()
* 선택된 요소의 content 영역(시작 태그 ~ 종료 태그) 리턴하고 설정하는 메소드이다. (HTML 태그를 태그로 인식)
* 클래스 선택자로 여러 요소가 선택되었을 때 첫 번째 요소의 텍스트 노드를 리턴하고, 전체 요소의 텍스트 노드 리턴 시 콜백 함수를 사용해야 한다.
  ```js
  $('선택자').html(); // 선택된 요소의 첫 번째 텍스트 노드 리턴
  $('선택자').html('텍스트 노드 내용'); // 선택된 요소의 text 노드 내용 대입
  $('선택자').html(function(index, 현재 값){}); 
  ```
#### 1.2. text()
* 선택된 요소의 content 영역(시작 태그 ~ 종료 태그) 리턴하고 설정하는 메소드이다. (HTML 태그를 태그로 인식 불가)
* 클래스 선택자로 여러 요소가 선택되었을 때 전체 요소의 텍스트 노드를 리턴한다.
  ```js
  $('선택자').text(); // 선택된 요소의 모든 텍스트 노드 리턴
  $('선택자').text('텍스트 노드 내용'); // 선택된 요소의 text 노드 내용 대입
  $('선택자').text(function(index, 현재 값){}); 
  ```
### 2. 클래스/속성 설정
#### 2.1. addClass()
* 선택자에 의해 선택된 요소에 클래스 속성값을 추가하는 메소드이다.
  ```js
  // 띄어쓰기로 클래스 여러 개 추가 가능
  $('선택자').addClass('클래스'); 
  ```
#### 2.2. removeClass()
* 선택자에 의해 선택된 요소에 클래스 속성값을 삭제하는 메소드이다.
  ```js
  // 띄어쓰기로 클래스 여러 개 삭제 가능
  $('선택자').removeClass('클래스'); 
  ```
#### 2.3. toggleClass()
* 선택된 요소에 클래스 속성값이 있으면 삭제하고 없으면 추가하는 메소드이다.
  ```js
  // 띄어쓰기로 클래스 여러 개 토글 가능
  $('선택자').toggleClass('클래스'); 
  ```
#### 2.4. attr()
* 선택자에 의해 선택된 요소에 속성 값 확인 및 변경하는 메소드이다.
  ```js
  $('선택자').attr('속성');
  $('선택자').attr('속성', '속성값');
  ```
#### 2.5. removeAttr()
* 선택자에 의해 선택된 요소에 속성을 제거하는 메소드이다.
  ```js
  $('선택자').removeAttr('속성');
  ```
#### 2.6. css()
* 선택자에 의해 선택된 요소의 스타일 속성 값을 가져오거나 설정하는 메소드이다.
  ```js
  $('선택자').css('속성');
  $('선택자').css('속성', '속성값');
  ```
### 3. 요소 추가
* 선택자에 의해 선택된 요소를 기준으로 다른 요소를 추가하는 메소드이다.
  <table>
    <tr>
      <th>메소드</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>$('선택자').append('생성 구문')
      <td>선택자에 의해 선택된 요소의 자식 요소로 뒷부분에 추가한다.</td>
    </tr>
    <tr>
      <td>$('선택자').prepend('생성 구문')
      <td>선택자에 의해 선택된 요소의 자식 요소로 앞부분에 추가한다.</td>
    </tr>
    <tr>
      <td>$('선택자').after('생성 구문')
      <td>선택자에 의해 선택된 요소의 형제 요소로 뒷부분에 추가한다.</td>
    </tr>
    <tr>
      <td>$('선택자').before('생성 구문')
      <td>선택자에 의해 선택된 요소의 형제 요소로 앞부분에 추가한다.</td>
    </tr>
  </table>
* 특정 요소를 선택자로 지정한 요소에 추가하는 메소드이다.
  <table>
    <tr>
      <td>$('생성구문|태그명').appendTo('선택자')</td>
      <td>특정 요소를 선택자로 지정한 요소의 자식 요소로 뒷부분에 추가한다.</td>
    </tr>
    <tr>
      <td>$('생성구문|태그명').prependTo('선택자')</td>
      <td>특정 요소를 선택자로 지정한 요소의 자식 요소로 앞부분에 추가한다.</td>
    </tr>
    <tr>
      <td>$('생성구문|태그명').insertAfter('선택자')</td>
      <td>특정 요소를 선택자로 지정한 요소의 형제 요소로 뒷부분에 추가한다.</td>
    </tr>
    <tr>
      <td>$('생성구문|태그명').insertBefore('선택자')</td>
      <td>특정 요소를 선택자로 지정한 요소의 형제 요소로 앞부분에 추가한다.</td>
    </tr>
  </table>
### 4. 요소 복제
* 선택자로 선택된 요소를 복사하는 메소드이다.
  ```js
  // 이벤트 핸들러 복사 여부 (기본값: false)
  $('선택자').clone([true|false]); 
  ```
### 5. 요소 제거
* 선택자에 의해 선택된 요소를 제거하는 메소드이다.
  <table>
    <tr>
      <th>메소드</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>$('선택자').remove();</td>
      <td>선택자로 선택된 요소를 제거 후 제거된 요소를 리턴한다.<br>단, 리턴되는 요소의 이벤트도 삭제한다.</td>
    </tr>
    <tr>
      <td>$('선택자').detach();</td>
      <td>선택자로 선택된 요소를 제거 후 제거된 요소를 리턴한다.<br>단, 리턴되는 요소의 이벤트는 삭제하지 않는다.</td>
    </tr>
    <tr>
      <td>$('선택자').empty();</td>
      <td>선택자로 선택된 요소의 하위 요소들을 삭제한다.</td>
    </tr>
  </table>

### 6. 배열 관리
* 객체나 배열을 반복적으로 처리할 때 사용하는 메소드이다.
  ```js
  $.each(배열, function(index, item){
	  ...
  });
  
  $('선택자').each(function(index, item){
  	...
  });
  ```
### 7. jQuery 충돌 방지
* jQuery 변수를 `$` 외에 다른 것으로 지정하는 메소드이다.
  ```js
  var 변수 = $.noConflict(); 
  ```
## 이벤트
### 1. 이벤트 연결 메소드
* 요소 객체에 이벤트 핸들러 지정하는 메소드이다.
* bind() 메소드는 3.0버전부터 사용하지 않기 때문에 on() 메소드를 사용할 것을 권장한다.
  <table>
    <tr>
      <th>메소드</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>$('선택자').bind('이벤트명[ 이벤트명]',function( ){ })</td>
      <td>지정 이벤트에 이벤트 핸들러 지정<br>* 다수 이벤트 지정 시 띄어쓰기로 구분</td>
    </tr>
    <tr>
      <td>$('선택자').on('이벤트명[ 이벤트명]', function( ){ })</td>
      <td>지정 이벤트에 이벤트 핸들러 지정<br>* 다수 이벤트 지정 시 띄어쓰기로 구분</td>
    </tr>
  </table>
* one() 메소드는 이벤트를 연결하여 한 번만 실행하는 메소드이다.
  <table>
    <tr>
      <th>메소드</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>$('선택자').one('이벤트명[, 이벤트명]',  '핸들러')</td>
      <td>핸들러에 있는 기능을 한 번만 실행<br>이벤트명을 다수로 설정하면 각  이벤트 별 한 번씩만 실행</td>
    </tr>
  </table>
### 2. 간단한 연결 이벤트
* 아래와 같이 이벤트에 해당하는 메소드에 직접 핸들러를 지정할 수 있다.
  ```js
  $('선택자').메소드(function(event){});
  ```
  <table>
    <tr>
      <th>메소드</th>
      <th>내용</th>
      <th>메소드</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>blur</td>
      <td>요소가 focus 해제 시</td>
      <td>scroll</td>
      <td>스크롤을 움직일 때</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>요소가 focus 받을 때</td>
      <td>click</td>
      <td>클릭했을 때</td>
    </tr>
    <tr>
      <td>focusin</td>
      <td>요소, child가 focus 받을 때</td>
      <td>dbclick</td>
      <td>더블클릭했을 때</td>
    </tr>
    <tr>
      <td>focusout</td>
      <td>요소, child가 focus 해제 시</td>
      <td>mousedown</td>
      <td>마우스 왼쪽 버튼 누를 때</td>
    </tr>
    <tr>
      <td>resize</td>
      <td>윈도우 크기 변경 시</td>
      <td>mouseup</td>
      <td>마우스 왼쪽 버튼 뗄 때</td>
    </tr>
    <tr>
      <td>mouseover</td>
      <td>마우스가 요소에 있을 때</td>
      <td>mousemove</td>
      <td>마우스가 요소, child에서 움직일 때</td>
    </tr>
    <tr>
      <td>mouseout</td>
      <td>마우스가 요소, child에서 나갈 때</td>
      <td>mouseenter</td>
      <td>마우스가 요소에 들어올 때</td>
    </tr>
    <tr>
      <td>mouseleave</td>
      <td>마우스가 요소에서 나갈 때</td>
      <td>change</td>
      <td>요소의 값이 변경되었을 때</td>
    </tr>
    <tr>
      <td>select</td>
      <td>텍스트가 선택됐을 때(textarea, filed)</td>
      <td>submit</td>
      <td>form이 전송되었을 때</td>
    </tr>
    <tr>
      <td>keydown</td>
      <td>키를 눌렀을 때</td>
      <td>keypress</td>
      <td>키를 눌렀을 때<br>(alt, ctrl, shift, esc 인식 X)</td>
    </tr>
  </table>
### 3. hover()
* mouseenter 이벤트와 mouseleave 이벤트를 동시에 연결한다.
  ```js
  //  첫 번째 함수가 mouseenter에서 작동, 두 번째 함수가 mouseleave에서 작동
  $('선택자').hover(function(){}, function(){}); 
  ```
### 4. trigger()
* 특정 이벤트나 기본 이벤트를 강제로 발생시키는 메소드이다.
  ```js
  $('선택자').trigger('이벤트명');
  ```
### 5. 이벤트 삭제 메소드
* on() 메소드로 지정된 이벤트 핸들러를 제거하는 메소드로 1.7버전부터 unbind, die, undelegate메소드를 대체한다.
  <table>
    <tr>
      <th>메소드</th>
      <th>내용</th>
    </tr>
    <tr>
      <td>$('선택자').off("이벤트명[ 이벤트명]", ["선택자"]);</td>
      <td>선택자에 이벤트명이 있는 이벤트 제거</td>
    </tr>
    <tr>
      <td>$('선택자').off("이벤트명[ 이벤트명]", ["핸들러"]);</td>
      <td>핸들러가 지정된 이벤트만 제거</td>
    </tr>
    <tr>
      <td>$('선택자').off(event);</td>
      <td>이벤트 핸들러에 인자로 event 객체를 받아 event 객체를 기준으로 이벤트 삭제</td>
    </tr>
  </table>
## Effect
### 1. Effect
* HTML 문서 내에 애니메이션 효과를 만들기 위한 메소드의 집합을 Effect라 한다.
### 2. show/hide()
* show()는 선택된 요소를 보여주는 메소드이다.
* hide()는 선택된 요소를 숨겨주는 메소드이다.
* toggle()은 show, hide를 동시에 적용하는 메소드이다.
  ```js
  $('선택자').show/hide/toggle([시간], [구간 별 속도], [callback]);
  ```
### 3. slide()
* slideDown()은 선택된 요소 위치에서 아래로 요소를 보여주는 메소드이다.
* slideUp()은 선택된 요소를 위로 숨겨주는 메소드이다.
* slideToggle()은 slideDown, slideUp을 동시에 적용하는 메소드이다.
  ```js
  $('선택자').slideDown/slideUp/slideToggle([시간], [구간 별 속도], [callback]);
  ```
### 4. fade()
* fadeIn()은 선택된 요소를 점점 진하게 보여주는 메소드이다.
* fadeOut()은 선택된 요소를 점점 희미하게 숨겨주는 메소드이다.
* fadeToggle()은 fadeIn, fadeOut을 동시에 적용하는 메소드이다.
* fadeTo()는 선택된 요소를 설정한 값까지 희미해지는 효과를 주는 메소드이다.
  ```js
  $('선택자').fadeIn/fadeOut/fadeToggle([시간], [구간 별 속도], [callback]);
  $('선택자').fadeTo([시간], [투명도], [구간 별 속도], [callback]);
  ```