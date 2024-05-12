import { useEffect, useState } from 'react';
import supabase from './supabase';
import CategoryFilter from './Components/CategoryFilter';
import FactList from './Components/FactList';
import Header from './Components/Header';
import NewFactForm from './Components/NewFactForm';
import './style.css';
import Loader from './Components/Loader';

// const initialFacts = [
//   {
//     id: 1,
//     text: "React is being developed by Meta (formerly facebook)",
//     source: "https://opensource.fb.com/",
//     category: "technology",
//     votesInteresting: 24,
//     votesMindblowing: 9,
//     votesFalse: 4,
//     createdIn: 2021,
//   },
//   {
//     id: 2,
//     text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
//     source:
//       "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
//     category: "society",
//     votesInteresting: 11,
//     votesMindblowing: 2,
//     votesFalse: 0,
//     createdIn: 2019,
//   },
//   {
//     id: 3,
//     text: "Lisbon is the capital of Portugal",
//     source: "https://en.wikipedia.org/wiki/Lisbon",
//     category: "society",
//     votesInteresting: 8,
//     votesMindblowing: 3,
//     votesFalse: 1,
//     createdIn: 2015,
//   },
// ];

function App() {

  // 1. Define state variable
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");


  useEffect(function () {
    async function getFacts() {
      setIsLoading(true);

      let query = supabase.from("facts").select("*");

      if (currentCategory !== "all") query = query.eq
        ("category", currentCategory)

      const { data: facts, error } = await query
        .order("votes_interesting", {
          ascending:
            false
        }).limit(1000);

      /// Error handling
      if (!error) setFacts(facts);
      else alert("There was a problem fetching data")
      setIsLoading(false);
    }

    getFacts();
  },
    [currentCategory]
  );


  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />

      {/* 2. Use state variable */}
      {showForm ? <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
        : null}

      <main className="main">
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? <Loader /> : <FactList facts={facts} setFacts={setFacts} />}
      </main>

    </>
  );
}

export default App;