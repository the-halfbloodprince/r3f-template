import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import WebGLCanvas from '../components/WebGLCanvas'
import Octahedron from '../components/Octahedron'
import Introduction from '../components/Introduction'

const Home = () => {
  return (
    <div className={styles.container} >
      <div className={styles.webglcanvas} >
        <WebGLCanvas>
          <Octahedron />
        </WebGLCanvas>
      </div>
      <Introduction />
    </div>
  )
}

export default Home