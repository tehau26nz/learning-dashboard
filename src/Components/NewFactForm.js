import { useState } from 'react';
import '../style.css';

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

function isValidHttpUrl(string) {
    try {
        // Create a new URL object
        const url = new URL(string);

        // Check for valid protocol (http or https)
        if (!(url.protocol === "http:" || url.protocol === "https:")) {
            return false;
        }

        // Check for valid hostname (including domain) using regular expression
        const hostnameRegex = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;
        return hostnameRegex.test(url.hostname);
    } catch (error) {
        // Handle potential errors during URL creation
        return false;
    }
}


function NewFactForm({ setFacts, setShowForm }) {
    const [text, setText] = useState("")
    const [source, setSource] = useState("http://example.com")
    const [category, setCategory] = useState("")
    const textLength = text.length;

    function handleSubmit(e) {
        // 1. Prevent browser reload
        e.preventDefault();
        console.log(text, source, category);

        // 2. Check if data is valid. if yes, create a new fact
        if (text && isValidHttpUrl(source) && category && textLength <= 200) {

            // 3. Create a new fact object
            const newFact = {
                id: Math.round(Math.random() * 100000),
                text,
                source,
                category,
                votesInteresting: 0,
                votesMindblowing: 0,
                votesFalse: 0,
                createdIn: new Date().getFullYear(),
            };


            // 4. Add the new fact to the UI: add the fact to state
            setFacts((facts) => [newFact, ...facts]);

            // 5. Reset input field
            setText('');
            setSource('');
            setCategory('');

            // 6. Close the form
            setShowForm(false);
        }
    }

    return (
        <form className="fact-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Fact to share..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <span>{200 - textLength}</span            >
            <input
                type="text"
                placeholder="Trustworthy source..."
                value={source}
                onChange={(e) => setSource(e.target.value)}
            />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Pick a Category</option>
                {CATEGORIES.map((category) => (
                    <option
                        key={category.name}
                        value={category.name}>
                        {category.name.toUpperCase()}
                    </option>
                ))}
            </select            >
            <button className="btn btn-large">Post</button>
        </form>
    )
}

export default NewFactForm;