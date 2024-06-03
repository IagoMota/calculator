class NumberClickDetector {
    callOnClick = (eventObject) => {
        const button = eventObject.target;
        const numberDisplay = document.querySelector(".number-display");
        numberDisplay.textContent = numberDisplay.textContent +  button.textContent;
    }
    addClickDetectorToNumbers() {
        const allNumbers = document.querySelectorAll(".number-container button")
        allNumbers.forEach(button => {
            button.addEventListener("click", this.callOnClick)
        })
    }
    start() {
        this.addClickDetectorToNumbers()
    }
}
export default NumberClickDetector;