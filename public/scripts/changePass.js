(async () => {
  const BASE_URL = "https://petit-practice.herokuapp.com/password";
  const res = await fetch(BASE_URL);
  const result = await res.json();

  const changePass = document.getElementById("change-pass");
  const headers = new Headers();
  headers.set("Content-type", "application/json");


  document.querySelector(".pass-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const UserInput = changePass.value;
    console.log(UserInput);
    await fetch(`${BASE_URL}/${result[0]._id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        authPassword: UserInput,
      }),
      mode: "cors",
    })
      .then((res) => {
        console.log(res.status, body);
      })
      .catch((err) => {
        console.log(err);
      });
  });
})();
