const pickBtn = document.querySelector(".pickBtn");
const show = document.querySelector(".show");

const renderResults = (name) => {
  show.innerHTML = `<div class="result-container">
                <div class="result-box">
                    <div class="msg-text">
                        <p>We have a winner!</p>
                    </div>
                    <div class="msg">
                        <h2>${name}</h2>
                        <button onclick="closeBtn()" >close</button>
                    </div>
                </div>
            </div>`;
};

const closeBtn = () => {
  show.innerHTML = "";

  names = [""];

  // renderResults()
};

pickBtn.addEventListener("click", () => {
  let inputName = document.querySelector("#input-name").value;

  let names = inputName.split(",");
  let randomIndex = Math.floor(Math.random() * names.length);

  let selectName = names[randomIndex];

  console.log(selectName);

  if (!inputName) {
    alert("Please enter name");
  } else {
    renderResults(selectName);
    inputName = "";
  }
});
