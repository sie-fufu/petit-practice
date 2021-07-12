(async () => {
  const res = await fetch("http://localhost:8000/password");
  const result = await res.json();
  const authPassword = result[0].authPassword;
  const adminPassword = result[0].adminPassword;
  console.log(authPassword);

  document.querySelector(".login").addEventListener("click", () => {
    // ユーザーの入力を求める
    const UserInput = prompt("パスワードを入力して下さい:", "");
    // 入力チェック
    if (/\d+/g.test(UserInput) === false) {
      // 半角英数字以外の文字が存在したらエラー
      alert("正しく、半角英数字のみを入力して下さい。");
    } else if (UserInput === authPassword) {
      // 入力内容からファイル名を生成して移動
      location.href = "./main.html";
    } else if (UserInput === adminPassword) {
      location.href = "./decide.html";
    }
  });
})();
