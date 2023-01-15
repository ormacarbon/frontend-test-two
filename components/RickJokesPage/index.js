import React, { useState, useCallback, useEffect } from "react";
import { RickJokesPageContainer } from "./styles";
import { fetchJoke } from "../../api/joke";
import rick1 from "../../images/rick-state-1.gif";
import rick2 from "../../images/rick-state-2.gif";
import rick3 from "../../images/rick-state-3.gif";
import rick4 from "../../images/rick-state-4.gif";
import rick5 from "../../images/rick-state-5.gif";
import Image from "next/image";
import { useRouter } from "next/router";

function RickJokesPage() {
  const [joke, setJoke] = useState({});
  const [jokeText, setJokeText] = useState("");
  const [question, setQuestion] = useState("");
  const [currentRickReaction, setCurrentRickReaction] = useState(rick1);
  const [isLoading, setIsLoading] = useState(false);
  const [completedJoke, setCompletedJoke] = useState(false);
  const [jokeCounter, setJokeCounter] = useState(0);
  const [confirmLeave, setConfirmLeave] = useState(false);
  const [leaveBtnText, setLeaveBtnText] = useState("Return to dashlist");
  const router = useRouter();

  const fetchJokeData = useCallback(async () => {
    setIsLoading(true);
    const jokes = await fetchJoke();
    setJoke(jokes);
    setIsLoading(false);
    setCompletedJoke(false);
    setJokeCounter(jokeCounter + 1);
    setConfirmLeave(false);
    setLeaveBtnText("Return to dashlist");
  }, [jokeCounter]);

  const handleJokes = () => {
    if (completedJoke) {
      fetchJokeData();
      return;
    }
    if (joke?.setup) {
      setJokeText(joke?.delivery);
      setCurrentRickReaction(rick3);
      setQuestion("Tell me another joke!");
      setIsLoading(false);
      setCompletedJoke(true);
      console.log("wtst?");
      return;
    }
    fetchJokeData();
  };

  const returnToDashList = () => {
    if (confirmLeave) {
      router.push("/dashlist");
      return;
    }
    setConfirmLeave(true);
    setLeaveBtnText("Yes, take me to dashlist!");
    setCurrentRickReaction(rick5);
    setJokeText(
      `Are you sure you want to leave? ${
        jokeCounter > 0
          ? "Don't you want to hear more jokes?"
          : "Don't you want to hear some jokes?"
      }`
    );
  };

  useEffect(() => {
    const handleJokeText = () => {
      if (joke?.type === "single") {
        setJokeText(joke?.joke);
        setCurrentRickReaction(rick3);
        setQuestion("Tell me another joke!");
        setCompletedJoke(true);
        return;
      }
      if (joke?.setup && joke?.delivery) {
        setJokeText(joke?.setup);
        setCurrentRickReaction(rick2);
        setQuestion("What's the punchline?");
      }
    };
    handleJokeText();
  }, [joke]);

  useEffect(() => {
    if (isLoading) {
      setCurrentRickReaction(rick4);
    }
  }, [isLoading]);

  return (
    <RickJokesPageContainer isLoading={isLoading}>
      <div className="rick-reactions-box">
        <span className="rick-message-baloon-box">
          <span className="rick-message-baloon">
            {jokeText || "Wanna hear a joke?"}
          </span>
        </span>
        <Image src={currentRickReaction} alt="rick" />
      </div>
      <button onClick={handleJokes}>
        {question || "Yeah, tell me a joke!"}
      </button>
      <button onClick={returnToDashList}>{leaveBtnText}</button>
    </RickJokesPageContainer>
  );
}

export default RickJokesPage;
