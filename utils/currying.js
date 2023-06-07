function curry(f) { // 커링 변환을 하는 curry(f) 함수
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}