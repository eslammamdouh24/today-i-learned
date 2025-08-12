import { useState } from "react";
import { voteFact } from "../services/factsService";

const Vote = ({ fact, option, setFacts }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const handleVoteFact = async (voteKey) => {
    setIsUpdating(true);
    const updatedFact = await voteFact(fact, voteKey);
    setFacts((facts) => facts.map((f) => (f.id === fact.id ? updatedFact : f)));
    setIsUpdating(false);
  };

  return (
    <button
      className="btn-vote"
      aria-label={option.label}
      disabled={isUpdating}
      onClick={() => handleVoteFact(option.key)}
    >
      {option.emoji} {fact[option.key]}
    </button>
  );
};

export default Vote;
