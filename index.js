var billAmount = document.querySelector("#bill-amount");
var nextBtn = document.querySelector("#next-btn");
var checkBtn = document.querySelector("#check-btn");
var cashGivenAmount = document.querySelector("#cash-given-amount");
var cashGivenSection = document.querySelector(".cash-given-section");
var notesSection = document.querySelector(".notes-section");
var checkBtn = document.querySelector("#check-btn");
const noOfNotes = document.querySelectorAll(".no-of-notes");
var errorMsg = document.querySelector("#error-message");
var errorMsg2 = document.querySelector("#error-message2");

const notes = [2000, 500, 100, 50, 20, 10, 5, 1];
const output = [0, 0, 0, 0, 0, 0, 0, 0];

nextBtn.addEventListener("click", nextBtnClickHandler);

function nextBtnClickHandler() {
  if (billAmount.value === "") {
    errorMsg.innerHTML = `Please enter bill amount`;
  } else if (billAmount.value < 0) {
    errorMsg.innerHTML = `Invalid Bill Amount`;
  } else {
    cashGivenSection.style.display = "block";
    errorMsg.innerHTML = ``;
  }
}

checkBtn.addEventListener("click", checkBtnClickHandler);

function checkBtnClickHandler() {
  notesSection.style.display = "block";
  if (cashGivenAmount.value === "") {
    errorMsg2.innerHTML = `Please enter cash given amount`;
    notesSection.style.display = "none";
  } else if (cashGivenAmount.value < 0) {
    errorMsg2.innerHTML = `Invalid Cash Given Amount`;
    notesSection.style.display = "none";
  } else {
    var cashGivenValue = Number(cashGivenAmount.value);
    var billAmountValue = Number(billAmount.value);
    if (cashGivenValue < billAmountValue) {
      errorMsg2.innerHTML = `Cash given should be more than Bill Amount!`;
      notesSection.style.display = "none";
    } else {
      calculateChange(billAmountValue, cashGivenValue);
      errorMsg2.innerHTML = ``;
    }
  }
}

function calculateChange(billAmount, cashGivenAmount) {
  var diff = cashGivenAmount - billAmount;
  for (var i = 0; i < notes.length; i++) {
    if (diff >= notes[i]) {
      var numberOfNotes = parseInt(diff / notes[i]);
      var newDifference = diff - notes[i] * numberOfNotes;
      diff = newDifference;
      output[i] = numberOfNotes;
      noOfNotes[i].innerText = numberOfNotes;
    } else {
      noOfNotes[i].innerText = 0;
    }
  }
}
