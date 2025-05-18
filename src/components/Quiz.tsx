import React, { useState } from "react";

function Quiz() {
  // Placeholder state to track answers
  const [answers, setAnswers] = useState<(string | null)[]>([null, null, null]);

  const handleAnswer = (questionIndex: number, value: string) => {
    const updated = [...answers];
    updated[questionIndex] = value;
    setAnswers(updated);
  };

  return (
    <div className="bg-light-teal py-16 px-8 flex flex-col items-center space-y-12">
      <h2 className="text-3xl font-heading text-primary-dark mb-4">Do You Need OT Help?</h2>

      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
        {/* Question Cards */}
        {["Do you struggle with daily tasks?", "Do you have pain doing normal activities?", "Do you avoid activities because of anxiety or discomfort?"].map((question, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-6 flex-1">
            <h3 className="text-xl font-heading text-primary-dark mb-4">{question}</h3>
            <div className="flex flex-col gap-2">
              {["Not at all", "Sometimes", "Often"].map((choice, choiceIndex) => (
                <button
                  key={choiceIndex}
                  onClick={() => handleAnswer(index, choice)}
                  className={`px-4 py-2 rounded-md font-sans border ${
                    answers[index] === choice
                      ? "bg-primary-dark text-white"
                      : "bg-warm-cream text-primary-dark"
                  }`}
                >
                  {choice}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Result Placeholder */}
      <div className="mt-8 text-center font-sans text-primary-dark">
        {answers.every((a) => a !== null) ? (
          <p className="text-lg font-semibold">
            {answers.filter((a) => a === "Often" || a === "Sometimes").length >= 2
              ? "You may benefit from Occupational Therapy!"
              : "You likely do not need OT support at this time."}
          </p>
        ) : (
          <p>Please answer all questions to see the result.</p>
        )}
      </div>
    </div>
  );
}

export default Quiz;