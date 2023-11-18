import { Header } from "./components/Header"
import styles from './App.module.css'
import './global.css'
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/ronaldoapf.png',
      name: 'Ronaldo Alves',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      }, 
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-11-18 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      }, 
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date('2023-11-17 20:00:00'),
  }
];
function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id} 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App
