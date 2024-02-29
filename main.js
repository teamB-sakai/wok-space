'use strict';

//関数の作成
document.addEventListener('DOMContentLoaded', () => {
  //ボタンを押したときの処理を指定
  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '末吉']; //constは変数の作成 ここはリストの作成
    const randomIndex = Math.floor(Math.random() * results.length); //ランダムに値が返されるように指定
    const selectedResult = results[randomIndex]; //返した値を
    
    // ランダムに選択された結果に対応するリンク先を取得
    const link = getResultLink(selectedResult);
    
    // リンク先にリダイレクト
    window.location.href = link;
  });

  // 与えられた結果に対応するリンク先を返す関数
  function getResultLink(result) {
    switch (result) {
      case '大吉':
        return 'page/page1.html';
      case '中吉':
        return 'page/page2.html';
      case '小吉':
        return 'page/page3.html';
      case '末吉':
        return 'page/page4.html';
    }
  }
});