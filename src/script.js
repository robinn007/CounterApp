let main = document.querySelector("#title");
let curValue = 0;

let btnDecrement = document.querySelector("#decrement");
let btnReset = document.querySelector("#reset");
let btnIncrement = document.querySelector("#increment");

btnIncrement.addEventListener("click", () => {
    curValue++;
    main.textContent = curValue;
})

btnDecrement.addEventListener("click", () => {
    curValue--;
    main.textContent = curValue;
})

btnReset.addEventListener("click", () => {
    curValue = 0;
    main.textContent = curValue;
})