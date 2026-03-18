import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const TesseractShape = () => {
    const groupRef = useRef();
    const innerCubeRef = useRef();
    const outerCubeRef = useRef();
    const linesRef = useRef();

    const { baseOuterCorners, baseInnerCorners } = useMemo(() => {
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
        return { baseOuterCorners: getCorners(2), baseInnerCorners: getCorners(1) };
    }, []);

    const edgeIndices = useMemo(() => [
        0, 1, 1, 3, 3, 2, 2, 0, // right face
        4, 5, 5, 7, 7, 6, 6, 4, // left face
        0, 4, 1, 5, 2, 6, 3, 7  // connecting faces
    ], []);

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
            innerCubeRef.current.updateMatrix();
        }

        if (linesRef.current && innerCubeRef.current) {
            const positions = linesRef.current.geometry.attributes.position.array;
            
            // Transform inner corners
            const transformedInner = baseInnerCorners.map(corner => 
                corner.clone().applyMatrix4(innerCubeRef.current.matrix)
            );
            
            let posIndex = 0;
            
            // 8 connecting lines
            for (let i = 0; i < 8; i++) {
                positions[posIndex++] = baseOuterCorners[i].x;
                positions[posIndex++] = baseOuterCorners[i].y;
                positions[posIndex++] = baseOuterCorners[i].z;
                
                positions[posIndex++] = transformedInner[i].x;
                positions[posIndex++] = transformedInner[i].y;
                positions[posIndex++] = transformedInner[i].z;
            }

            for (let i = 0; i < edgeIndices.length; i += 2) {
                // outer cube edge
                positions[posIndex++] = baseOuterCorners[edgeIndices[i]].x;
                positions[posIndex++] = baseOuterCorners[edgeIndices[i]].y;
                positions[posIndex++] = baseOuterCorners[edgeIndices[i]].z;
                
                positions[posIndex++] = baseOuterCorners[edgeIndices[i+1]].x;
                positions[posIndex++] = baseOuterCorners[edgeIndices[i+1]].y;
                positions[posIndex++] = baseOuterCorners[edgeIndices[i+1]].z;
                
                // inner cube edge
                positions[posIndex++] = transformedInner[edgeIndices[i]].x;
                positions[posIndex++] = transformedInner[edgeIndices[i]].y;
                positions[posIndex++] = transformedInner[edgeIndices[i]].z;
                
                positions[posIndex++] = transformedInner[edgeIndices[i+1]].x;
                positions[posIndex++] = transformedInner[edgeIndices[i+1]].y;
                positions[posIndex++] = transformedInner[edgeIndices[i+1]].z;
            }
            
            linesRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    // Create lines connecting the inner and outer cube
    const linesGeometry = useMemo(() => {
        const points = [];
        for (let i = 0; i < 8; i++) {
            points.push(baseOuterCorners[i], baseInnerCorners[i]);
        }

        for (let i = 0; i < edgeIndices.length; i += 2) {
            points.push(baseOuterCorners[edgeIndices[i]], baseOuterCorners[edgeIndices[i + 1]]);
            points.push(baseInnerCorners[edgeIndices[i]], baseInnerCorners[edgeIndices[i + 1]]);
        }

        return new THREE.BufferGeometry().setFromPoints(points);
    }, [baseOuterCorners, baseInnerCorners, edgeIndices]);

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
