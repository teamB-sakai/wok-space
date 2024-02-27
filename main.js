'use strict';

{
  const btn = document.getElementById('btn');
  const reult = document.getElementById('result');
  const main = document.getElementById('main');
  const page1 = document.getElementById('page1');
  const page2 = document.getElementById('page2');
  const page3 = document.getElementById('page3');
  const page4 = document.getElementById('page4');


  btn.addEventListener('click', () =>  {
    const results = ['大吉','末吉','中吉','小吉'];
    const n = Math.floor(Math.random() * 4);

    result.textContent = results[n];

    main.style.display = 'none';
    result.style.display = 'block'; 

    if (results[n] === '大吉') {
      page1.style.display = 'block';
    } else if(results[n] === '末吉') {
      page2.style.display = 'block';
    } else if(results[n] === '中吉') {
      page3.style.display = 'block';
    } else if(results[n] === '小吉') {
      page4.style.display = 'block';
    } 
  });

  const repeatOmikujiBtns = document.querySelectorAll('#repeat-omikuji');
  repeatOmikujiBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      result.textContent = '';
      [page1, page2, page3, page4].forEach(page => {
        page.style.display = 'none';
      });
      main.style.display = 'block';
    });
  });
}