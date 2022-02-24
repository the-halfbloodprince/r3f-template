import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

export default function WebGLCanvas({children}) {
    return (
        <Canvas>
          <ambientLight intensity={0.1} />
          {/* <directionalLight color={'red'} position={[3, 0, 5]} /> */}
          <pointLight position={[3, 2, 5]} intensity={0.6} />
          {children}
          <OrbitControls enableDamping={true} />
        </Canvas>
    )
  }