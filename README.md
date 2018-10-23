# Grape API Spec

## Server

### API

#### POST /signup

##### Description
- 회원가입

##### Consume / Produce
- application/json (Consume 한정으로 application/x-www-form-urlencoded도 받음)

##### Parameters
- id
  - Description: 아이디
  - Type: string
  - Required: YES
- pw
  - Description: 비밀번호
  - Type: string
  - Required: YES
- email
  - Description: 이메일
  - Type: string
  - Required: YES
- phonenum
  - Description: 전화번호
  - Type: string
  - Required: YES

##### Response
- 201
  - Description: 성공적인 회원가입!
  - Response: 없어요
- 418
  - Description: 저는 사실 찻잔임;; (id중복일 경우)
  - Response: 없어요

#### POST /signin

##### Description
- 로그인이요

##### Consume / Produce
- application/json (Consume 한정으로 application/x-www-form-urlencoded도 받음)

##### Parameters
- id
  - Description: 아이디
  - Type: string
  - Required: YES
- pw
  - Description: 비밀번호
  - Type: string
  - Required: YES

##### Response
- 200
  - Description: 성공적인 로그인!
  - Response: 없어요
- 401
  - Description: 로그인 실패
  - Response: 없어요


#### POST /concert

##### Description
- 콘서트 등록

##### Consume / Produce
- multipart/form-data (사진때문에)

##### Parameters
- contract
  - Description: 컨트랙트
  - Type: string
  - Required: YES
- picture
  - Description: 콘서트 대표 사진
  - Type: string
  - Required: YES
- content
  - Description: 콘서트 내용
  - Type: string
  - Required: YES

##### Response
- 201
  - Description: 성공적인 등록
  - Response: 없어요

### DB

#### User
id: string
 pw: string
 email: string
 phonenum: string
 
#### Concert
contract: string
 picture: string
 content: string
 
## Klaytn

### Data
  - 콘서트
    1. 이름
    2. 장소
    3. 기간
    4. 개최자, 주최기관
    6. 티켓 종류
      * 티켓 이름
      * 티켓 가격
      * 티켓 상세 정보
      * 티켓 갯수
    7. 경매 유무
    8. 태그
    9. 티켓 구매자 리스트
  - 티켓
    1. 이벤트 컨트렉트 주소
    2. 구매 일시
    3. 구매한 사람 지갑 주소
    4. 경매 이력
    5. 경매 여부 (boolean)
  - 경매 이력
    1. 판매 일자
    2. 경매한 사람 지갑 주소


### sturct
#### 콘서트

1. 이름
2. 장소
3. 기간
4. 개최자, 주최기관
5. 티켓 종류
  - 티켓 이름
  - 티켓 가격
  - 티켓 상세 정보
  - 티켓 갯수
6. 경매 유무
7. 태그

#### 티켓
1. 콘서트 주소
2. 구매 일시
3. 구매자 지갑 주소
4. 경매 이력
  - 판매 일자
  - 경매한 사람 지갑주소
5. 경매 여부 (boolean)

### 함수

#### 콘서트 등록
##### Pay Function
##### 인자

1. 티켓
2. 수수료

#### 콘서트 조회
##### View Public Function
object array로 
- 콘서트

#### 콘서트 티켓 구매
- Pay Function

##### 파라미터

1. 콘서트 주소
2. 티켓 인덱스
3. 구매자 주소

#### 사용자 티켓 정보 조회
- View Function

##### 파라미터

1. 사용자 주소

##### Response

1. 사용자가 소유하고 있는 티켓

#### 티켓 상세 조회

##### 파라미터

1. 사용자 주소
2. 티켓 주소

##### Response

1. 티켓

#### 경매에 올라온 티켓 조회
- View Function 

##### Response
1. 티켓 (거래에 올라온 것만)

#### 경매 등록
- Pay Function

##### Param

1. 사용자 주소
2. 티켓 주소
3. 수수료


#### 경매 신청

##### Param

1. 해당 티켓 주소
2. 경매 금액