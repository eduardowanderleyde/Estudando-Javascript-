const btFetchDog = document.getElementById("btFetchtime");
btFetchtime.addEventListener("click", fetchRandomtimeImage());

const fetchRandomtimeImage = () => {
  fetch(
    "https://api.hgbrasil.com/weather?key=1b4800da&lat=-23.682&lon=-46.875&user_ip=remote",
    {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
    });
};
