import NumberClickDetector from "./src/NumberClickDetector.js";
import AddButtonClickDetector from "./src/AddButtonClickDetector.js";
import CalculatorEngine from "./src/CalculatorEngine.js"

const numberClickDetector = new NumberClickDetector;
const calculatorEngine = new CalculatorEngine()
const addButtonClickDetector = new AddButtonClickDetector()

numberClickDetector.start()
addButtonClickDetector.start()