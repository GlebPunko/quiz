function Result({correct}) {
    return (
        <div className="result">
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
            <h2>Вы отгадали {correct} ответа из 10</h2>
            <a href="/">
                <button>Попробовать снова</button>
            </a>
        </div>
    );
}

export default Result;