class AddButtonClickDetector {
    constructor(StateControl){
        this.stateControl = StateControl;
    }
    callOnClick = (e) => {
        const button = e.target;
        const numberDisplay = document.querySelector(".number-display");
        const myNumber = numberDisplay.textContent;
        console.log(myNumber)        
    }
    addClickDetectorToAddButton() {
        const addButton = document.querySelector(".add-button");
        addButton.addEventListener("click", this.callOnClick);
    }
    start() {
        this.addClickDetectorToAddButton()
    }
}

export default AddButtonClickDetector;