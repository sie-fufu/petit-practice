(async () => {
  const res = await fetch("http://localhost:8000/password");
  const result = await res.json();
  console.log(result);

  const changePass = document.getElementById("change-pass");
  changePass.value = result[0].authPassword;
  const headers = new Headers();
  console.log(changePass.value);
  headers.set("Content-type", "application/json");

  document.querySelector(".pass-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(changePass.value);
    const authPassword = changePass.value;
    await fetch(`http://localhost:8000/password/${result[0]._id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        authPassword: authPassword,
      }),
      mode: "cors",
    })
      .then((res) => {
        console.log(res.status);
        alert("更新しました");
      })
      .catch((err) => {
        alert(err);
      });
  });
})();
