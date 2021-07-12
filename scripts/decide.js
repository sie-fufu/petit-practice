(async () => {
  const res = await fetch("http://localhost:8000/practice");
  const result = await res.json();
  let isCancel = result[0].isCancel;
  const decisive = document.getElementById("decisive-btn");
  const cancel = document.getElementById("cancel-btn");

  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  decisive.addEventListener("click", async () => {
    await fetch(`http://localhost:8000/practice/${result[0]._id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        isCancel: false,
      }),
      mode: "cors",
    })
      .then((res) => {
        console.log(res.status, "OK");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  cancel.addEventListener("click", async () => {
    await fetch(`http://localhost:8000/practice/${result[0]._id}`, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify({
        isCancel: true,
      }),
      mode: "cors",
    })
      .then((res) => {
        console.log(res.status, "OK");
      })
      .catch((err) => {
        console.log(err);
      });
  });
})();
