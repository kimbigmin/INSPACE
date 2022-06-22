# INSPACE
- 독서실 좌석 예약 및 관리 웹서비스


## 1. 프로젝트 소개

  - 기술 스택: HTML, CSS, Vanilla JS, Node.js, MongoDB, Mongoose
  - 웹서비스에 대한 자세한 개요

    **INSPACE = IN + SPACE**
    
    독서실이라는 공간(space) 안(in)에서 자신의 좌석을 미리 확보하고 관리하며 공부 경험을 더욱 높입니다.

    
## 2. 프로젝트 목표

  - 프로젝트 아이디어 동기
    * 독서실 키오스크 앞까지 가야만 알 수 있던 독서실 좌석 현황, 미리 알 수 있다면?
    * 팀원 모두 독서실에 도착했는데 좌석이 없거나 원하는 좌석이 없었던 슬픈 경험을 토대로 아이디어를 도출하게 되었습니다.  
  
   #
  - 문제를 해결하기 위한 특정 질문 명시
      1. 시간을 다 사용하지 않았는데 퇴실하는 경우 어떻게 처리할 것인가? 

          → 시간권 사용자와 당일권 사용자를 구분하여 관리한다. 당일권 사용자의 경우 퇴실 시 결제한 시간이 소멸되고, 시간권 사용자의 경우 시간을 멈춘다.


      2. 그렇다면 시간권 이용자의 경우 로그인 이후 서비스 플로우가 어떻게 되는가?

          → 로그인 후 바로 메인으로 이동한다. 메인에 좌석 선택 버튼을 두어 회원권 선택을 건너뛰고 바로 좌석을 선택한 뒤 메인으로 다시 돌아오게 한다.



      3. 당일권 이용자와 시간권 이용자의 퇴실은 각각 어떻게 처리할 것인가?

          - 당일권 이용자: '퇴실하기'버튼을 누르면 시간이 소멸함과 동시에 로그아웃된다
          - 시간권 이용자: '퇴실하기'버튼을 누르면 퇴실된 메인으로 이동하고, 로그아웃버튼을 누르면 로그아웃된다.



   
## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**
  - 주요 기능 (주된 활용성) 및 서브 기능
    1. 로그인 및 회원가입

    2. 회원권 및 좌석 선택

    3. 시간 연장

    4. 좌석 이동


  - 프로젝트만의 차별점, 기대 효과

## 4. 프로젝트 구성도
  - 와이어프레임/스토리보드 추가

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 백두산 | 팀장/백엔드 개발 |
| 김민규 | 프론트엔드 개발 |
| 김은솔 | 프론트엔드 개발 |
| 이가은 | 프론트엔드 개발 |
| 한대현 | 백엔드 개발 |

**멤버별 responsibility**

1. 프론트엔드 담당

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 백엔드 담당

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

## 6. 버전
  - 프로젝트의 버전 기입

## 7. FAQ
  - 자주 받는 질문 정리
