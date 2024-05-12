import { useState } from 'react';
import { CATEGORIES } from "./Category";
import supabase from "../supabase";

function Fact({ fact, setFacts }) {

    const [isUpdating, setIsUpdating] = useState(false);

    async function handleVote(columnName) {
        setIsUpdating(true);
        const { data: updatedFact, error } = await
            supabase
                .from('facts')
                .update({
                    [columnName]: fact[columnName] + 1
                })
                .eq("id", fact.id)
                .select();
        setIsUpdating(false);

        // console.log(updatedFact);
        if (!error) setFacts((facts) => facts.map((f) => f.id === fact.id ?
            updatedFact[0] : f))
    }

    return (
        <li className="fact">
            <p>
                {fact.text}
                <a
                    className="source"
                    href={fact.source}
                    rel="noreferrer"
                    target="_blank"
                >(Source)</a
                >
            </p>
            <span className="tag" style={{
                backgroundColor:
                    CATEGORIES.find((category) => category.name === fact.category)?.color
            }}
            >{fact.category}
            </span>
            <div className="vote-buttons">
                <button onClick={() => handleVote("votes_interesting")} disabled={isUpdating}>👍 {fact.votes_interesting}</button>
                <button onClick={() => handleVote("votes_mind_blowing")} disabled={isUpdating}>🤯 {fact.votes_mind_blowing}</button>
                <button onClick={() => handleVote("votes_false")} disabled={isUpdating}>⛔ {fact.votes_false}</button>
            </div>
        </li>
    );
}

export default Fact;