import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'

const Octahedron = (props) => {

    const mesh = useRef()
  
    const [hover, setHover] = useState(false)
  
    useFrame((state, delta) => {
      // mesh.current.rotation.x += 0.01
      mesh.current.rotation.y += (delta)
      // mesh.current.rotation.z += 0.01
    })
  
    return (
      <mesh
        {...props}
        ref={mesh}
        // scale={hover ? 1.5 : 1}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        {/* <boxBufferGeometry args={[3, 3, 3]} /> */}
        {/* <sphereBufferGeometry args={[2.2, 32, 32]} /> */}
        <octahedronBufferGeometry />
        <meshStandardMaterial 
          color = {hover ? 'hotpink' : 'royalblue'}
        //   wireframe={true}
        />
      </mesh>
    )
  }

  export default Octahedron