const btFetchDog = document.getElementById("btFetchDog");

btFetchDog.addEventListener("click", fetchRandomDogImage());
const fetchRandomDogImage = () => {
  fetch(
    "https://calendarific.com/api/v2/holidays?api_key=41acf47a0b0e91bab2d1e0a99807bf6c156a8996"
  )
    .then((response) => response.json())

    .then((data) => console.log(data));
};
