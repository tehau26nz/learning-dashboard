import Fact from './Fact';


function FactList({ facts }) {
    return (
        <section>
            <ul className="facts-list">
                {facts.map((fact) =>
                    <Fact key={fact.id} factObj={fact} />
                )}
            </ul>
            <p>There are {facts.length} facts in the DB. Add yours!</p>
        </section>
    );
}

export default FactList;