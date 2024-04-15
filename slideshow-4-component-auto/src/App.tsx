import { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  const [active, setActive] = useState<number>(0)
  const elementStatus: string[] = ['element-current', 'element-previous', 'element-next']

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
        <div className={`slideshow-element ${elementStatus[active]}`} style={{background: 'url("https://wallpapers.com/images/high/aesthetic-purple-anime-4k-vekcu58ykv6lkn0g.webp") center center / cover'}}></div>
        <div className={`slideshow-element ${elementStatus[(active+1) % elementStatus.length]}`} style={{background: 'url("https://wallpapercave.com/wp/wp5493885.jpg") center center / cover'}}></div>
        <div className={`slideshow-element ${elementStatus[(active+2) % elementStatus.length]}`} style={{background: 'url("https://e0.pxfuel.com/wallpapers/762/510/desktop-wallpaper-sunset-city-scenery-anime.jpg") center center / cover'}}></div>
      </div>
    </main>
  )
}

export default App

