import questions from "../../data/questions";

function Game({step, question, onClickVariant}) {
    const percentage = Math.round(step / questions.GetData().length * 100);

    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((text, index) =>
                        <li key={text.toString()} onClick={() => onClickVariant(index)}>{text}</li>)
                }
            </ul>
        </>
    );
}

export default Game;