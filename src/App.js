import './index.scss';
import {useState} from "react";
import questions from "./data/questions";
import Game from "./components/Game/Game";
import Result from "./components/Result/Result";

function App() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions.GetData()[step]

    const onClickVariant = (questionIndex) => {
        setStep(step + 1)

        if(questionIndex === question.correct) {
            setCorrect(correct + 1)
        }
    }

    return (
        <div className="App">
            {step !== questions.GetData().length
                ? <Game step={step} question={question} onClickVariant={onClickVariant}/>
                : <Result correct={correct}/>
            }
        </div>
  );
}

export default App;
