import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Ghost3D = () => {
  const ghostCanvasRef = useRef(null);
  const sceneRef = useRef(null);
  const ghostRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const timeRef = useRef(0);
  const particlesRef = useRef([]);
  const baseScale = 0.3;
  const starsRef = useRef([]);

  useEffect(() => {
    let scene, camera, renderer, ghost, ghostGroup;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    // Helper to set canvas size attributes
    const setCanvasSize = () => {
      if (ghostCanvasRef.current) {
        ghostCanvasRef.current.width = window.innerWidth;
        ghostCanvasRef.current.height = window.innerHeight;
      }
    };

    const init = () => {
      setCanvasSize();
      // Scene
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x1a1a2e, 1, 1000);
      sceneRef.current = scene;

      // Camera
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Renderer
      renderer = new THREE.WebGLRenderer({ 
        canvas: ghostCanvasRef.current, 
        antialias: true, 
        alpha: true 
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0); // Transparent background
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x404040, 0.3);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x6a5acd, 1, 100);
      pointLight.position.set(0, 10, 10);
      pointLight.castShadow = true;
      scene.add(pointLight);
      const ghostLight = new THREE.PointLight(0x87ceeb, 0.8, 20);
      ghostLight.position.set(0, 0, 2);
      scene.add(ghostLight);

      // Create ghost
      createGhost();

      function createGhost() {
        ghostGroup = new THREE.Group();
        // Ghost body (main sphere)
        const bodyGeometry = new THREE.SphereGeometry(0.8, 32, 32);
        const bodyMaterial = new THREE.MeshPhongMaterial({
          color: 0xe6f3ff,
          transparent: true,
          opacity: 0.85,
          shininess: 100,
          emissive: 0x111133
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0.3;
        body.castShadow = true;
        ghostGroup.add(body);
        // Glowing ring (halo) around ghost
        const glowGeometry = new THREE.RingGeometry(1.1, 1.5, 128);
        const glowMaterial = new THREE.ShaderMaterial({
          uniforms: {
            glowColor: { value: new THREE.Color(0x87ceeb) },
            intensity: { value: 0.8 }
          },
          vertexShader: `
            varying vec2 vUv;
            void main() {
              vUv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec3 glowColor;
            uniform float intensity;
            varying vec2 vUv;
            void main() {
              float dist = distance(vUv, vec2(0.5, 0.5));
              float alpha = smoothstep(0.6, 0.3, dist) * intensity;
              gl_FragColor = vec4(glowColor, alpha);
            }
          `,
          transparent: true,
          depthWrite: false,
          side: THREE.DoubleSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(0, 0.3, 0);
        glow.rotation.x = Math.PI / 2;
        glow.name = 'ghostGlow';
        ghostGroup.add(glow);

        // Animated stars around the ring
        const starCount = 12;
        const starRadius = 1.3; // between inner and outer ring
        const starGeometry = new THREE.SphereGeometry(0.04, 8, 8);
        const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 });
        for (let i = 0; i < starCount; i++) {
          const star = new THREE.Mesh(starGeometry, starMaterial.clone());
          // Initial position on the ring
          const angle = (i / starCount) * Math.PI * 2;
          star.position.set(
            Math.cos(angle) * starRadius,
            0.3,
            Math.sin(angle) * starRadius
          );
          star.userData = {
            baseAngle: angle,
            twinklePhase: Math.random() * Math.PI * 2
          };
          ghostGroup.add(star);
          starsRef.current.push(star);
        }
        // Ghost tail (elongated bottom)
        const tailGeometry = new THREE.ConeGeometry(0.7, 1.5, 8);
        const tailMaterial = new THREE.MeshPhongMaterial({
          color: 0xe6f3ff,
          transparent: true,
          opacity: 0.7,
          shininess: 100,
          emissive: 0x111133
        });
        const tail = new THREE.Mesh(tailGeometry, tailMaterial);
        tail.position.y = -0.8;
        tail.castShadow = true;
        ghostGroup.add(tail);
        // Eyes
        const eyeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
        const eyeMaterial = new THREE.MeshPhongMaterial({
          color: 0x000000,
          shininess: 200
        });
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.25, 0.4, 0.6);
        ghostGroup.add(leftEye);
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.25, 0.4, 0.6);
        ghostGroup.add(rightEye);
        // Mouth
        const mouthGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const mouthMaterial = new THREE.MeshPhongMaterial({
          color: 0x000000
        });
        const mouth = new THREE.Mesh(mouthGeometry, mouthMaterial);
        mouth.position.set(0, 0.15, 0.65);
        mouth.scale.set(1.5, 0.8, 1);
        ghostGroup.add(mouth);
        // Floating effect particles around ghost
        const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
        const particleMaterial = new THREE.MeshPhongMaterial({
          color: 0x87ceeb,
          transparent: true,
          opacity: 0.6,
          emissive: 0x446688
        });
        for (let i = 0; i < 15; i++) {
          const particle = new THREE.Mesh(particleGeometry, particleMaterial);
          particle.position.set(
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 3,
            (Math.random() - 0.5) * 2
          );
          particle.userData = {
            originalPosition: particle.position.clone(),
            speed: Math.random() * 0.02 + 0.01,
            amplitude: Math.random() * 0.5 + 0.2
          };
          ghostGroup.add(particle);
          particlesRef.current.push(particle);
        }
        // Add ghost to scene
        ghostGroup.scale.set(baseScale, baseScale, baseScale);
        scene.add(ghostGroup);
        ghost = ghostGroup;
        ghostRef.current = ghost;
      }

      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);
        timeRef.current += 0.016;
        const time = timeRef.current;
        const mouseData = mouseRef.current;
        // Smooth ghost movement towards mouse
        if (ghost) {
          ghost.position.x += (mouseData.targetX - ghost.position.x) * 0.05;
          ghost.position.y += (mouseData.targetY - ghost.position.y) * 0.05;
          // Floating animation
          ghost.position.y += Math.sin(time * 2) * 0.01;
          // Subtle rotation based on movement
          ghost.rotation.z = (mouseData.targetX - ghost.position.x) * 0.1;
          ghost.rotation.x = (mouseData.targetY - ghost.position.y) * 0.05;
          // Breathing effect
          const breathScale = baseScale * (1 + Math.sin(time * 3) * 0.02);
          ghost.scale.set(breathScale, breathScale, breathScale);
          // Animate glowing ring
          const glow = ghost.getObjectByName('ghostGlow');
          if (glow) {
            // Animate scale and intensity for glowing effect
            const glowScale = 1.1 + Math.sin(time * 2) * 0.08;
            glow.scale.set(glowScale, glowScale, glowScale);
            if (glow.material.uniforms && glow.material.uniforms.intensity) {
              glow.material.uniforms.intensity.value = 0.7 + 0.5 * (0.5 + 0.5 * Math.sin(time * 2));
            }
          }
          // Animate stars around the ring
          const starCount = starsRef.current.length;
          for (let i = 0; i < starCount; i++) {
            const star = starsRef.current[i];
            const baseAngle = star.userData.baseAngle;
            // Orbit animation
            const orbitSpeed = 0.5 + 0.2 * Math.sin(i + time * 0.7);
            const angle = baseAngle + time * orbitSpeed;
            const radius = 1.3 + 0.05 * Math.sin(time * 2 + i);
            star.position.x = Math.cos(angle) * radius;
            star.position.z = Math.sin(angle) * radius;
            // Twinkle animation
            const twinkle = 0.7 + 0.5 * Math.sin(time * 3 + star.userData.twinklePhase + i);
            star.material.opacity = 0.5 + 0.5 * twinkle;
            star.scale.setScalar(0.7 + 0.5 * twinkle);
          }
          // Animate particles around ghost
          particlesRef.current.forEach((particle, index) => {
            const userData = particle.userData;
            const offset = time * userData.speed + index * 0.5;
            particle.position.x = userData.originalPosition.x + Math.sin(offset) * userData.amplitude;
            particle.position.y = userData.originalPosition.y + Math.cos(offset * 0.8) * userData.amplitude;
            particle.position.z = userData.originalPosition.z + Math.sin(offset * 1.2) * userData.amplitude * 0.5;
            // Fade in and out
            particle.material.opacity = 0.3 + Math.sin(offset * 2) * 0.3;
          });
        }
        // Camera slight movement for depth
        camera.position.x += (mouseData.x * 0.5 - camera.position.x) * 0.03;
        camera.position.y += (mouseData.y * 0.5 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);
        renderer.render(scene, camera);
      };

      const handleMouseMove = (event) => {
        const mouseX = (event.clientX - windowHalfX) / windowHalfX;
        const mouseY = -(event.clientY - windowHalfY) / windowHalfY;
        mouseRef.current.x = mouseX;
        mouseRef.current.y = mouseY;
        mouseRef.current.targetX = mouseX * 3;
        mouseRef.current.targetY = mouseY * 3;
      };

      const handleResize = () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        setCanvasSize();
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      document.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', handleResize);
      animate();

      // Cleanup function
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        if (renderer) {
          renderer.dispose();
        }
        // Remove stars
        starsRef.current.forEach(star => {
          if (star.parent) star.parent.remove(star);
        });
        starsRef.current = [];
      };
    };

    const cleanup = init();
    return cleanup;
  }, []);

  return (
    <canvas
      ref={ghostCanvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '50vw',
        height: '50vh',
        pointerEvents: 'none',
        zIndex: 1000
      }}
      aria-hidden="true"
    />
  );
};

export default Ghost3D; 