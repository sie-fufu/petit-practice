
 function gate() {
  // ユーザーの入力を求める
  let UserInput = parseInt(prompt("パスワードを入力して下さい:",""));
  // 入力チェック
  if(/\W+/g.test(UserInput)) {
    // 半角英数字以外の文字が存在したらエラー
    alert("半角英数字のみを入力して下さい。")
  } // キャンセルをチェック
    else if(UserInput === 222) {
      // 入力内容からファイル名を生成して移動
      location.href = "./main.html";
    } else if(UserInput === 111) {
      location.href = "./decide.html";
    }
}
