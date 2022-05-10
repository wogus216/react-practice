export  function increase(number) {
  const promise = new Promise((resolve, reject) => {
    //resolve는 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        //50보다 높으면 에러 발생시키기
        const e = new Error('NumberTooBig');
        return reject(e);
      }
      resolve(result); //number 값에 + 10 후 성공 처리
    }, 1000);
  });
  return promise;
}


