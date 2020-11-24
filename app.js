const numSort = (a, b) => {
  return a - b;
};

const app = () => {
  const button = document.querySelector(".submit-button");
  const clear1 = document.querySelector(".clear-1");
  const clear2 = document.querySelector(".clear-2");
  const clear3 = document.querySelector(".clear-3");
  const inputA = document.querySelector(".enter-a");
  const inputB = document.querySelector(".enter-b");
  const inputC = document.querySelector(".enter-c");

  clear1.addEventListener("click", () => {
    document.querySelector(".enter-a").value = "";
  });
  clear2.addEventListener("click", () => {
    document.querySelector(".enter-b").value = "";
  });
  clear3.addEventListener("click", () => {
    document.querySelector(".enter-c").value = "";
  });

  button.addEventListener("click", () => {
    const A = document.querySelector(".enter-a").value;
    const B = document.querySelector(".enter-b").value;
    const C = document.querySelector(".enter-c").value;
    const numbers = /^[0-9]+$/;

    let sides = [A, B, C];

    sides.sort(numSort);

    let sideA = sides[0];
    let sideB = sides[1];
    let sideC = sides[2];

    // console.log(sides);
    // console.log(sideA + sideB);

    if (sideA.match(numbers) && sideB.match(numbers) && sideC.match(numbers)) {
    } else {
      document.getElementById("answer").textContent =
        "Unable to create triangle with given sides";
      return 0;
    }

    if (sideA == "" || sideB == "" || sideC == "") {
      document.getElementById("answer").textContent =
        "Unable to create triangle with given sides";
      return 0;
    }

    sideA = parseInt(sides[0], 10);
    sideB = parseInt(sides[1], 10);
    sideC = parseInt(sides[2], 10);

    if (sideA + sideB <= sideC) {
      document.getElementById("answer").textContent =
        "Unable to create triangle with given sides";
      return 0;
    }

    if (sideA * sideA + sideB * sideB == sideC * sideC) {
      document.getElementById("answer").textContent =
        "Triangle is right-angled";
      return 0;
    }

    if (sideA * sideA + sideB * sideB > sideC * sideC) {
      document.getElementById("answer").textContent =
        "Triangle is acute-angled";
      return 0;
    }

    if (sideA * sideA + sideB * sideB < sideC * sideC) {
      document.getElementById("answer").textContent =
        "Triangle is obtuse-angled";
      return 0;
    }
  });

  inputA.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector(".submit-button").click();
    }
  });

  inputB.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector(".submit-button").click();
    }
  });

  inputC.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector(".submit-button").click();
    }
  });
};

app();
