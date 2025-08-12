import { supabase } from "../lib/supabase";
import { toast } from "react-hot-toast";

export const getFacts = async (currentCategory) => {
  let query = supabase.from("facts").select("*");

  if (currentCategory !== "all") {
    query = query.eq("category", currentCategory);
  }

  const { data, error } = await query
    .order("totalVotes", { ascending: false })
    .limit(1000);

  if (error) {
    toast.error("There was an error fetching facts ❌");
    return null;
  }

  return data;
};

export const addFact = async (factData) => {
  const { data: newFact, error } = await supabase
    .from("facts")
    .insert([factData])
    .select();

  if (error) {
    toast.error("There was an error adding the fact ❌");
    return null;
  }

  toast.success("Fact added successfully ✅");
  return newFact[0];
};

export const voteFact = async (fact, voteKey) => {
  const { data: updatedFact, error } = await supabase
    .from("facts")
    .update({
      [voteKey]: fact[voteKey] + 1,
    })
    .eq("id", fact.id)
    .select();

  if (error) {
    toast.error("There was an error voting for the fact ❌");
    return null;
  }

  toast.success("Vote recorded successfully ✅");
  return updatedFact[0];
};

export const deleteFact = async (factID) => {
  const { error } = await supabase.from("facts").delete().eq("id", factID);

  if (error) {
    toast.error("There was an error deleting the fact ❌");
    return false;
  }

  toast.success("Fact deleted successfully ✅");
  return true;
};
