
"use client";

import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log(container);
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#ffffff",
          },
          links: {
            enable: true,
            color: "#ffffff",
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
};

export default CoverParticles;
