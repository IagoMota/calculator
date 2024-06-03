class AddButtonClickDetector {
    constructor(StateControl){
        this.stateControl = StateControl;
    }
    callOnClick = (e) => {
        const button = e.target;
    }
    addClickDetectorToAddButton() {
        const addButton = document.querySelector(".add-button");
        addButton.addEventListener(this.callOnClick);
    }
    start() {
        this.addClickDetectorToAddButton()
    }
}

export default AddButtonClickDetector;