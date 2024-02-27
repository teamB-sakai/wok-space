'use strict';

{
  const btn = document.getElementById('btn');
  const btn2 = document.getElementById('btn2');
  const reult = document.getElementById('result');
  const main = document.getElementById('main');

  btn2.style.display = 'none';


  btn.addEventListener('click', () =>  {
    const results = ['大吉','末吉','中吉','小吉','凶'];
    const n = Math.floor(Math.random() * 5);

    result.textContent = results[n];

    main.style.display = 'none';

    result.style.display = 'block'; 
    btn2.style.display = 'block';
  });

  btn2.addEventListener('click', () => {
    // 元の画面に戻す
    result.textContent = ''; // 結果をリセット
    btn2.style.display = 'none';
    main.style.display = 'block';
  });

}