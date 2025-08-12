import { useState } from "react";
import Tag from "./Tag";
import Vote from "./Vote";
import Source from "./Source";
import VoteOptions from "../data/voteOptions";
import { deleteFact } from "../services/factsService";

const Fact = ({ fact, setFacts, isDisputed }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteFact = async () => {
    setIsDeleting(true);
    const isDeleted = await deleteFact(fact.id);
    if (isDeleted) {
      setFacts((prev) => prev.filter((f) => f.id !== fact.id));
    }
    setIsDeleting(false);
  };

  return (
    <li className="fact">
      <p>
        {isDisputed ? <span className="disputed">[⛔️ DISPUTED]</span> : null}
        {fact.text}
        <Source source={fact.source} />
      </p>
      <Tag fact={fact} />
      <div className="vote-buttons">
        {VoteOptions.map((option) => (
          <Vote
            key={option.key}
            fact={fact}
            option={option}
            setFacts={setFacts}
          />
        ))}
      </div>
      <button
        className="delete-fact"
        disabled={isDeleting}
        onClick={() => handleDeleteFact(fact)}
      >
        <span>delete</span>
        <span>❌</span>
      </button>
    </li>
  );
};

export default Fact;
