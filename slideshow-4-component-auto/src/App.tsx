import { useEffect, useState } from 'react'
import './App.css'

//Components
import ImageItem from './components/img.tsx'

const App = () => {
  const [active, setActive] = useState<number>(0)
  const elementStatus: string[] = ['element-invisible', 'element-next', 'element-current', 'element-previous']

  useEffect(() => {
    const timer: number = setTimeout(() => {
      const newActive: number = (active + 1) % elementStatus.length;
      setActive(newActive);
    }, 5000)
    return () => clearTimeout(timer);
  }, [active, elementStatus])

  return (
    <main>
      <div className='slideshow-container'>
        <ImageItem 
          class={elementStatus[active]} 
          url={"https://wallpapers.com/images/high/aesthetic-purple-anime-4k-vekcu58ykv6lkn0g.webp"}
        />
        <ImageItem 
          class={elementStatus[(active+1) % elementStatus.length]} 
          url={"https://wallpapercave.com/wp/wp5493885.jpg"}
        />
        <ImageItem 
          class={elementStatus[(active+2) % elementStatus.length]} 
          url={"https://e0.pxfuel.com/wallpapers/762/510/desktop-wallpaper-sunset-city-scenery-anime.jpg"}
        />
        <ImageItem 
          class={elementStatus[(active+3) % elementStatus.length]} 
          url={"https://wallpapers-clan.com/wp-content/uploads/2023/12/anime-girl-pink-eyes-city-desktop-wallpaper-preview.jpg"}
        />
      </div>
    </main>
  )
}

export default App