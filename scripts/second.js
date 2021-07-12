(async () => {
  const eventDate = document.getElementById("event-date");
  const pracPlace = document.getElementById("prac-place");
  const courtNumList = document.querySelector(".court-num");
  const meetTime = document.getElementById("meet-time");

  const res = await fetch("http://localhost:8000/event");
  const result = await res.json();

  eventDate.textContent = result[0].eventDate;
  pracPlace.textContent = result[0].practicePlace;
  courtNumList.textContent = result[0].courtNumList;
  meetTime.textContent = result[0].meetTime;

  console.log(eventDate);
  console.log(result);
  console.log("OK");
  console.log(pracPlace);
})();
