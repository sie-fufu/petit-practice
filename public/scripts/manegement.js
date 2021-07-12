(async () => {
  const BASE_URL = "https://petit-practice.herokuapp.com/event";
  const res = await fetch(BASE_URL);
  const result = await res.json();
  const submit = document.getElementById("submit");
  const manege = document.getElementById("manege");
  const reset = document.getElementById("reset");

  const headers = new Headers();
  headers.set("Content-Type", "application/json");

  console.log("OK");

  manege.addEventListener("submit", async (e) => {
    e.preventDefault();

    const eventDate = document.getElementById("event-date").value;
    const pracPlace = document.getElementById("prac-place").value;
    const courtNumList = [...document.querySelectorAll(".court-number")].reduce(
      (acc, curr) => {
        if (curr.checked) {
          acc.push(+curr.value);
          return acc;
        }
        return acc;
      },
      []
    );
    const meetTime = document.getElementById("meet-time").value;

    const body = {
      eventDate: eventDate,
      practicePlace: pracPlace,
      courtNumList: courtNumList,
      meetTime: meetTime,
    };
      await fetch(`${BASE_URL}/${result[0]._id}`,{
        method: "PUT",
        headers: headers,
        body: JSON.stringify(body),
        mode: "cors"
      }).then((res) => {
        console.log(res.status, '更新しました。')
        eventDate.textContent.body
      }).catch((err) => {
        console.log(err)
       })
  });


})();
