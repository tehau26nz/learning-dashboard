const CATEGORIES = [
    { name: "technology", color: "#3b82f6" },
    { name: "science", color: "#16a34a" },
    { name: "finance", color: "#ef4444" },
    { name: "society", color: "#eab308" },
    { name: "entertainment", color: "#db2777" },
    { name: "health", color: "#14b8a6" },
    { name: "history", color: "#f97316" },
    { name: "news", color: "#8b5cf6" },
];

function Fact({ factObj }) {
    return (
        <li className="fact">
            <p>
                {factObj.text}
                <a
                    className="source"
                    href={factObj.source}
                    rel="noreferrer"
                    target="_blank"
                >(Source)</a
                >
            </p>
            <span className="tag" style={{
                backgroundColor:
                    CATEGORIES.find((category) => category.name === factObj.category).color
            }}
            >{factObj.category}</span
            >
            <div className="vote-buttons">
                <button>👍 {factObj.votesInteresting}</button>
                <button>🤯 {factObj.votesMindblowing}</button>
                <button>⛔ {factObj.votesFalse}</button>
            </div>
        </li>
    );
}

export default Fact;