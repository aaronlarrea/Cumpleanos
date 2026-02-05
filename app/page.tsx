"use client";

import { useState } from "react";
import { PasswordStep } from "@/components/steps/password-step";
import { PhotosStep } from "@/components/steps/photos-step";
import { ChoiceStep } from "@/components/steps/choice-step";
import { LetterStep } from "@/components/steps/letter-step";

type Step = "password" | "photos" | "choice" | "letter";

export default function Page() {
  const [step, setStep] = useState<Step>("password");
  const [transitioning, setTransitioning] = useState(false);

  const goTo = (next: Step) => {
    setTransitioning(true);
    setTimeout(() => {
      setStep(next);
      setTransitioning(false);
    }, 500);
  };

  return (
    <main
      className={`transition-opacity duration-500 ${transitioning ? "opacity-0" : "opacity-100"}`}
    >
      {step === "password" && <PasswordStep onSuccess={() => goTo("photos")} />}
      {step === "photos" && <PhotosStep onNext={() => goTo("choice")} />}
      {step === "choice" && <ChoiceStep onYes={() => goTo("letter")} />}
      {step === "letter" && <LetterStep />}
    </main>
  );
}
