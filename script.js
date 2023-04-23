//PLAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
const rulesBtn = document.querySelector(".rules-btn");
const closeBtn = document.querySelector(".close-btn");
const inputSection = document.querySelector(".visible-section");
const rulesSec = document.querySelector(".rules-section");
const desSection = document.querySelector(".decision-section");
const userInput = document.querySelectorAll(".userInput");
const showUserChoice = document.querySelector(".show-input");
const showResult = document.querySelector(".result-really");
const showCompChoice = document.querySelector(".show-compChoice");
const score = document.querySelector(".score");

//FATHER OF ADD EVNET LISTENER
const listen = (nam, fnc) => nam.addEventListener("click", fnc);

//--REGARDING THE RULE--
const showRule = () => rulesSec.classList.toggle("invisible");
const hideRule = () => rulesSec.classList.add("invisible");
listen(rulesBtn, showRule);
listen(closeBtn, hideRule);
//--REGARDING THE RULE--

// this hides the option menu and gets the next section and clones
userInput.forEach((input) => {
  const sectionHide = () => {
    //hides
    inputSection.classList.add("invisible");
    desSection.classList.remove("invisible");
    //clones
    const clonedBtn = input.cloneNode(true);
    showUserChoice.appendChild(clonedBtn);
  };
  listen(input, sectionHide);
});
// this hides the option menu and gets the next section and clones

//gets the choice of the computer
const getCompChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  let compChoice = choices[randomIndex];
  return compChoice;
};
//gets the choice of the computer

//COMPARES and shows who won
const outcomes = {
  rock: { rock: "Tiee", paper: "YOU LOST", scissors: "YOU WON" },
  paper: { rock: "YOU WON", paper: "Tiee", scissors: "YOU LOST" },
  scissors: { rock: "YOU LOST", paper: "YOU WON", scissors: "Tiee" },
};

const compare = (user, comp) => {
  let points = 0;
  const result = outcomes[user][comp];
  showResult.textContent = result;

  result == "YOU WON" ? (points = points + 1) : (points = points);

  score.textContent = points;
  console.log(points);

  console.log(user + " this user");
  console.log(comp + " this comp");
  console.log(result);
};
//COMPARES and shows who won

//clones
const cloner = (subject) => {
  const cloned = subject.cloneNode(true);
  return cloned;
};
//clones

// INITIALISES EVERY FUNCTION anddd gets userinput
const initializer = () => {
  userInput.forEach((input) => {
    listen(input, () => {
      let compChoice = getCompChoice();
      //displays the comp Choice

      setTimeout(() => {
        switch (compChoice) {
          case "rock": {
            showCompChoice.appendChild(cloner(userInput[2]));
            break;
          }
          case "scissors": {
            showCompChoice.appendChild(cloner(userInput[1]));
            break;
          }
          case "paper": {
            showCompChoice.appendChild(cloner(userInput[0]));
          }
        }

        showCompChoice.classList.remove("invisible");
        compare(input.value, compChoice);
      }, 300);
    });
  });
};

initializer();
// INITIALISES EVERY FUNCTION and gets userinput
//PLAYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

const playAgnBtn = document.querySelector(".playAgain");
const userImg = document.querySelector(".image");

const revertShowHide = () => {
  inputSection.classList.remove("invisible");
  desSection.classList.add("invisible");

  showResult.textContent = "";
  showUserChoice.innerHTML = "";
  showCompChoice.innerHTML = "";
  showCompChoice.classList.add("invisible");
};

listen(playAgnBtn, revertShowHide);
