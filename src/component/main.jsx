import "../../src/index.css";
import React, { Suspense, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Boxes from './GiftBox';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//import { useControls } from "leva";
import {Loading} from './Loading'

gsap.registerPlugin(ScrollTrigger);

const CameraControls = () => {
  const { scene, camera } = useThree();
  console.log(camera);

  camera.position.set(11.06, 2.92, 5.733914260076097);
  scene.position.set(-21.10, 0, -6.75);
  scene.rotation.set(0, 3.10, 0);

  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //     value: { x: 11.062196174565141, y: 2.9187389103550148, z: 5.73 },
  //     step: 0.05,
  //   },
  //   scenePosition: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.05,
  //   },
  //   sceneRotation: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.05,
  //   },
  // });

  // useFrame(() => {
  //   camera.position.x = cameraPosition.x;
  //   camera.position.y = cameraPosition.y;
  //   camera.position.z = cameraPosition.z;

  //   scene.position.x = scenePosition.x;
  //   scene.position.y = scenePosition.y;
  //   scene.position.z = scenePosition.z;

  //   scene.rotation.x = sceneRotation.x;
  //   scene.rotation.y = sceneRotation.y;
  //   scene.rotation.z = sceneRotation.z;
  // });

  useLayoutEffect(() => {
    // JavaScript
    const letters = document.querySelectorAll('.letters');
    const letters2 = document.querySelectorAll('.letters2');
    const letters3 = document.querySelectorAll('.letters3');
    const tl = gsap.timeline();
   

    gsap.to(letters, {
      opacity: 1,
      x: -250,
          scrollTrigger: {
            trigger: ".letters",
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
      }
    });
    gsap.to(letters2, {
      opacity: 1,
      x: 250,
          scrollTrigger: {
            trigger: ".letters2",
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
      }
    });
    gsap.to(letters3, {
      opacity: 1,
      x: -100,
          scrollTrigger: {
            trigger: ".letters3",
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
      }
    });

    //1//
    tl.to(camera.position, {
      x: 11.06,
      y: 2.92,
      z: 5.73,
      scrollTrigger: {
        trigger: ".secHeader",
        start: "top top",
        end: "top top",
        scrub: true,
        // markers: true,
        immediateRender: false,
        reverse: true,
      }
    })
     .to(scene.position, {
      x: 1.15,
      y: 3.65,
      z: -1.20,
      scrollTrigger: {
        trigger: ".secAbout",
        start: "top top",
        end: "top bottom",
        scrub: true,
        // markers: true,
        immediateRender: false,
        reverse: true,
      }
    })
    .to(scene.rotation, {
      x: 0.15,
      y: -0.20,
      z: -3.20,
      scrollTrigger: {
        trigger: ".secHeader",
        start: "top top",
        end: "top bottom",
        scrub: true,
        // markers: true,
        immediateRender: false,
        reverse: true,
      }
    })
    .to(scene.position, {
      x: -21.18,
      y: 0,
      z: -6.75,
      scrollTrigger: {
        trigger: ".secHeader",
        start: "top top",
        end: "top bottom",
        scrub: true,
        // markers: true,
        immediateRender: false,
        reverse: true,
      }
    })
      .to(scene.rotation, {
        x: 0,
        y: .10,
        z: 0,
        scrollTrigger: {
          trigger: ".secHeader",
          start: "top top",
          end: "top bottom",
          scrub: true,
          // markers: true,
          immediateRender: false,
          reverse: true,
        }
      })
      .to(scene.position, {
        x: 0,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".secHeader",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
          immediateRender: false,
          reverse: true,
        }
      })
      .to(scene.rotation, {
        x: 0,
        y: 1.10,
        z: 0,
        scrollTrigger: {
          trigger: ".secHeader",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
          immediateRender: false,
          reverse: true,
        }
      })
      .to(camera.position, {
        x: 11.06,
        y: 2.92,
        z: 5.73,
        scrollTrigger: {
          trigger: ".secHero",
          start: "top bottom",
          end: "top top",
        scrub: true,
        // markers: true,
        immediateRender: false,
        reverse: true,
      }

    })
    .to(scene.position,{
      x:0,
      y:0,
      z:0,
      scrollTrigger: {
        trigger: ".secHero",
        start: "top bottom",
        end: "top top",
        scrub: true,
        // markers: true,
        immediateRender: false,
        reverse: true,
      }
    })
    .to(scene.rotation,{
        x:0,
        y:3.65,
        z:0,
        scrollTrigger: {
          trigger: ".secHero",
          start: "top bottom",
          end: "top top",
          scrub: true,
          // markers: true,
          immediateRender: false,
          reverse: true,
        }
      })
      .to(scene.rotation,{
          x:0,
          y:-0.70,
          z:0,
          scrollTrigger: {
            trigger: ".secAbout",
            start: "top bottom",
            end: "top top",
            scrub: true,
            // markers: true,
            immediateRender: false,
            reverse: true,
          }
        })
         .to(camera.position,{
          x:11.06,
          y:2.92,
          z:5.73,
          scrollTrigger: {
            trigger: ".secBuyNow",
            start: "top bottom",
            end: "top top",
            scrub: true,
            // markers: true,
            immediateRender: false,
            reverse: true,
          }
        })
         .to(scene.position,{
          x:0.70,
          y:-0.70,
          z:-0.45,
          scrollTrigger: {
            trigger: ".secBuyNow",
            start: "top bottom",
            end: "top top",
            scrub: true,
            // markers: true,
            immediateRender: false,
            reverse: true,
          }
        })
         .to(scene.rotation,{
          x:0,
          y:-19.55,
          z:0,
          scrollTrigger: {
            trigger: ".secBuyNow",
            start: "top bottom",
            end: "top top",
            scrub: true,
            // markers: true,
            immediateRender: false,
            reverse: true,
          }
        })
    
  });

  
  

  


  return (
    <OrbitControls
      args={[camera]}
      target={[0, 0, 0]}
      enablePan={false}
      enableZoom={false}
      enableRotate={false}
    />
  );
};

const Main = () => {
  
 
  return (
    <Canvas className="z-10 ">
      <CameraControls />
      <Environment preset='city' />
      <Suspense fallback={<Loading/>}>
      <Boxes />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </Canvas>
  );
};

export default Main;
