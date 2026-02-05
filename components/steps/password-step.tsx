"use client";

import React from "react"

import { useState } from "react";
import { Heart, Lock } from "lucide-react";

interface PasswordStepProps {
  onSuccess: () => void;
}

export function PasswordStep({ onSuccess }: PasswordStepProps) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalized = password.trim().replace(/-/g, "/");
    if (normalized === "06/02/2006") {
      onSuccess();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4">
      <div
        className={`flex w-full max-w-sm flex-col items-center gap-8 transition-transform ${shake ? "animate-shake" : ""}`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Lock className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-balance text-center font-sans text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Tienes que adivinar la contrasena...
          </h1>
          <p className="text-center text-sm text-muted-foreground sm:text-base">
            Pista: el día que nació el amor de mi vida
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
          <div className="relative">
            <input
              type="text"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              placeholder="dd/mm/aaaa"
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-center text-lg tracking-widest text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {error && (
            <p className="text-center text-sm text-destructive">
              Esa no es la fecha... intenta de nuevo
            </p>
          )}

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
          >
            <Heart className="h-4 w-4" />
            <span>Entrar</span>
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
          20%, 40%, 60%, 80% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
