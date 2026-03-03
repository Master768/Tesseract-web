import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const TesseractShape = () => {
    const groupRef = useRef();
    const innerCubeRef = useRef();
    const outerCubeRef = useRef();
    const linesRef = useRef();

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.2;
            groupRef.current.rotation.x += delta * 0.1;
            groupRef.current.rotation.z += delta * 0.05;
        }

        if (innerCubeRef.current) {
            innerCubeRef.current.rotation.y -= delta * 0.3;
            innerCubeRef.current.rotation.x += delta * 0.15;
            // Pulsate inner cube
            const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
            innerCubeRef.current.scale.set(scale, scale, scale);
        }
    });

    // Create lines connecting the inner and outer cube
    const linesGeometry = useMemo(() => {
        const outerSize = 2;
        const innerSize = 1;

        // Corners of a cube centered at origin
        const getCorners = (size) => [
            new THREE.Vector3(size, size, size),
            new THREE.Vector3(size, size, -size),
            new THREE.Vector3(size, -size, size),
            new THREE.Vector3(size, -size, -size),
            new THREE.Vector3(-size, size, size),
            new THREE.Vector3(-size, size, -size),
            new THREE.Vector3(-size, -size, size),
            new THREE.Vector3(-size, -size, -size),
        ];

        const outerCorners = getCorners(outerSize);
        const innerCorners = getCorners(innerSize);

        const points = [];
        for (let i = 0; i < 8; i++) {
            points.push(outerCorners[i], innerCorners[i]);
        }

        // Also add lines for the cubes themselves to ensure they're visible
        const edgeIndices = [
            0, 1, 1, 3, 3, 2, 2, 0, // right face
            4, 5, 5, 7, 7, 6, 6, 4, // left face
            0, 4, 1, 5, 2, 6, 3, 7  // connecting faces
        ];

        for (let i = 0; i < edgeIndices.length; i += 2) {
            points.push(outerCorners[edgeIndices[i]], outerCorners[edgeIndices[i + 1]]);
            points.push(innerCorners[edgeIndices[i]], innerCorners[edgeIndices[i + 1]]);
        }

        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        return geometry;
    }, []);

    return (
        <group ref={groupRef} scale={2}>
            {/* Outer Glowing Wireframe Cube */}
            <mesh ref={outerCubeRef}>
                <boxGeometry args={[4, 4, 4]} />
                <meshStandardMaterial
                    color="#00E5FF"
                    wireframe
                    transparent={false}
                    emissive="#00E5FF"
                    emissiveIntensity={2}
                />
            </mesh>

            {/* Connecting Lines */}
            <lineSegments ref={linesRef} geometry={linesGeometry}>
                <lineBasicMaterial color="#1A5FFF" linewidth={2} />
            </lineSegments>

            {/* Inner Core */}
            <mesh ref={innerCubeRef}>
                <boxGeometry args={[2, 2, 2]} />
                <meshStandardMaterial
                    color="#FF007F"
                    wireframe
                    transparent={false}
                    emissive="#FF007F"
                    emissiveIntensity={4}
                />
            </mesh>

            <pointLight position={[0, 0, 0]} color="#00E5FF" intensity={100} distance={20} />
            <pointLight position={[0, 0, 0]} color="#FF007F" intensity={100} distance={20} />
        </group>
    );
};

const TesseractCore = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
                    <TesseractShape />
                </Float>

                <Sparkles count={200} scale={20} size={3} speed={0.4} opacity={0.6} color="#00E5FF" />
                <Sparkles count={150} scale={15} size={4} speed={0.6} opacity={0.8} color="#1A5FFF" />
            </Canvas>
        </div>
    );
};

export default TesseractCore;
