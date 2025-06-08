'use client'
import SplashCursor from "@/blocks/Animations/SplashCursor/SplashCursor";
import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

export const Particle = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadAll(engine);
      //await loadFull(engine);
    //   await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => (
    {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "grab",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                grab: {
                    distance: 200,
                    duration: 0.5,
                },
            },
        },
        particles: {
            color: {
                value: ["#FF6500","#7A1CAC","#1F7D53","#4C3BCF"],
            },
            links: {
                color: "#3C3D37",
                distance: 150,
                enable: true,
                opacity: 0.7,
                width: 1,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.out,
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 50,
            },
            opacity: {
                value: 0.7,
            },
            bounce:{
                vertical: { value: 50 },
                horizontal: { value: 50 }
            },
            shape: {
                type: "random",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
    <>
        <SplashCursor/>
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    </>
    );
  }

  return( 
  <>
  </>
  )
};