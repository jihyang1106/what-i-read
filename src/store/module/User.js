const initState = {
  isLogin: false,
  userInfo: {},
  userInfoUpdate: {},
};

//액션 타입 정의하기 : 승보
const USER_INFO = 'user/USERINFO';
const USER_UPDATE = 'user/USERUPDATE';

//액션 생성함수 작성 - reducer와 연결된 함수 : 승보
export function userInfoCreate(payload) {
  return {
    type: USER_INFO,
    payload, //두 개이상 데이터를 담고 있을 때 쓴다. ?는 의미?
  };
}

export function userInfoUpdate(payload) {
  return {
    type: USER_UPDATE,
    payload,
  };
}

//리듀서 : 승보
export default function user(state = initState, action) {
  switch (action.type) {
    case USER_INFO:
      return { ...state, isLogin: true, userInfo: { ...action.payload } };
    case USER_UPDATE:
      return { ...state, isLogin: true, userInfo: { ...action.payload } };
    default:
      return state;
  }
}
