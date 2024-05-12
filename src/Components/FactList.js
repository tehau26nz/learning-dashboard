import Fact from './Fact';

function FactList({ facts, setFacts }) {

    if (facts.length === 0)
        return <p className="message">
            No facts for this category yet! Create the first one 😉
        </p>


    return (
        <section>
            <div className="db-paragraph">
                <p>There are {facts.length} facts in the DB. Add your own!</p>
            </div>
            <ul className="facts-list">
                {facts.map((fact) =>
                    <Fact key={fact.id} fact={fact} setFacts={setFacts} />
                )}
            </ul>
        </section>
    );
}

export default FactList;