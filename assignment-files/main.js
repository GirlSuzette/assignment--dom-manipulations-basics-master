document
  .querySelector("#inject-html button")
  .addEventListener("click", function() {
    // TASK #1
    var answerBoxEl = document.querySelector("#inject-html .answer-box");
    answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>";
  });

document.querySelector("#double button").addEventListener("click", function() {
  // TASK #2
  var answerPTagWithValue = document.querySelector("#compoundInvestment");
  // you do the rest
  answerPTagWithValue.innerHTML = answerPTagWithValue.textContent * 2;
});

document.querySelector("#blow-up button").addEventListener("click", function() {
  // TASK #3
  var circle = document.querySelector(".circle-red");

  if (circle.offsetWidth < 320) {
    circle.style.width = circle.offsetWidth * 2 + "px";
    circle.style.height = circle.offsetHeight * 2 + "px";
  } else {
    circle.style.width = "40px";
    circle.style.height = "40px";
  }
});

document.querySelector("#remove button").addEventListener("click", function() {
  // TASK #4
  var listInactive = document.querySelectorAll(".inactive");

  listInactive.forEach(function(listElement) {
    listElement.remove();
  });
});

document
  .querySelector("#reverse-squares button")
  .addEventListener("click", function() {
    // TASK #5
    var span = [];
    var fatherBox = document.querySelector("#squares-box");
    var listReverse = document.querySelectorAll(".square");

    listReverse.forEach(function(itm) {
      span.push(itm);
      itm.remove();
    });
    span.reverse().forEach(function(itm) {
      fatherBox.appendChild(itm);
    });
  });

document
  .querySelector("#pig-latin button")
  .addEventListener("click", function() {
    // TASK #6

    var list = document.querySelectorAll("#tasks li");
    var fatherBoxList = document.querySelector("#tasks");

    list.forEach(function(itm) {
      var text = itm.textContent;
      var reverse = text
        .split("")
        .reverse()
        .join("");
      itm.textContent = reverse;
      fatherBoxList.appendChild(itm);
    });
  });

document
  .querySelector("#cycle-image button")
  .addEventListener("click", function() {
    //TASK #7
    function changeImage() {
      var image = document.querySelector("myImage");
      if (image.src.match("bulbon")) {
        image.src = "pic_bulboff.png";
      } else {
        image.src = "pic_bulbon.png";
      }
    }
  });
