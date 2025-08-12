import Fact from "./Fact";

const FactsList = ({ facts, setFacts }) =>
  facts.length ? (
    <section>
      <ul className="facts-list">
        {facts.map((fact) => (
          <Fact
            key={fact.id}
            fact={fact}
            setFacts={setFacts}
            isDisputed={
              fact.votesFalse > fact.votesInteresting + fact.votesMindBlowing
            }
          />
        ))}
      </ul>
      <p>There are {facts.length} facts!</p>
    </section>
  ) : (
    <p className="message">
      No facts available for this category yet! Create the first one ✌️
    </p>
  );

export default FactsList;
