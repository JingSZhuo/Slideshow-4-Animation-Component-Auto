import '../App.css'

interface imageItemValues {
    class: string,
    url: string
}

const ImageItem = (props: imageItemValues) => {

    return(
        <div className={`slideshow-element ${props['class']}`} style={{background: `url(${props['url']}) center center / cover`}}>
            <div className='prev'></div>
            <div className='next'></div>
        </div>
    )
}
export default ImageItem;