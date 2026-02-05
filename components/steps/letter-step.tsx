"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export function LetterStep() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 py-12">
      <div
        className={`w-full max-w-lg transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          {/* Decorative top */}
          <div className="flex items-center justify-center gap-2 bg-primary/5 px-6 py-5">
            <Heart className="h-5 w-5 fill-primary text-primary" />
            <span className="font-sans text-sm font-semibold uppercase tracking-widest text-primary">
              Para ti
            </span>
            <Heart className="h-5 w-5 fill-primary text-primary" />
          </div>

          <div className="flex flex-col gap-5 px-5 py-6 sm:gap-6 sm:px-8 sm:py-8 md:px-12 md:py-10">
            <p className="font-sans text-lg font-semibold text-foreground sm:text-xl">
              Querida Paula,
            </p>

            <div className="flex flex-col gap-4 text-sm leading-relaxed text-foreground/85 sm:text-base">
              <p>
                Si estas leyendo esto es porque finalmente es tu cumpleaños miniña.
                Feliz cumpleaños a la niña de mis ojos y a una de las mejores personas que hay
                en este mundo. No se ni por donde empezar a escribir lo que siento por ti, pero
                lo voy a intentar porque te mereces que cada palabra que escriba sea un reflejo de lo
                mucho que te quiero y lo importante que eres para mi.
              </p>

              <p>
                Cada momento contigo se siente como un regalo. Desde las
                conversaciones que no terminan hasta los silencios que dicen
                mas que mil palabras. Contigo aprendi que el amor no es solo
                un sentimiento, es una decision que se toma cada dia.
              </p>

              <p>
                Miniña, quiero que sepas lo bonito que es tener una persona como tú a mi lado
                y, aunque ahora me piques con tener mi edad, sigo pensando que eres el amor de mi vida.
                Gracias por regalarme la felicidad que me das.
              </p>

              <p>
                Gracias por ser tu. Gracias por elegirme. Gracias por cada
                risa, cada abrazo, y cada momento que guardamos juntos.
              </p>

              <p>
                Feliz cumpleanos princesa, espero que este año sea increible para ti y
                que sigas siendo la persona tan increible que eres. Te amo <3
              </p>
            </div>

            <div className="flex flex-col items-end gap-1 pt-4">
              <p className="text-base text-foreground/85">Con todo mi amor,</p>
              <p className="font-sans text-lg font-semibold italic text-primary">
                Tu persona favorita
              </p>
            </div>
          </div>

          {/* Decorative bottom */}
          <div className="flex items-center justify-center bg-primary/5 px-6 py-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Heart
                  key={`heart-${i}`}
                  className="h-4 w-4 fill-primary/40 text-primary/40"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
