import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import { useState } from "react"
import { useModalContext } from "../context/modalContext"

const ImageSlider = (props:any) => {
    
    const {selectedImageIndex} = useModalContext()
    const [activeImage, setActiveImage] = useState<number>(selectedImageIndex ||  0)


    const handleNextImage = ()=> {
        if(activeImage === props.images.length -1) {
            setActiveImage(0)
            return
        }
        setActiveImage(prevImage => prevImage +1)
    }

    const handlePrevImage = () => {
        if(activeImage === 0) {
            setActiveImage(props.images.length -1)
            return
        }
        setActiveImage(prevImage => prevImage -1)
    }

  return (
    // <div className="max-w-[400px] min-w-[200px] h-[300px] flex items-center relative z-20">
    <>
        <ArrowLeft onClick={ handlePrevImage} sx={{cursor:"pointer", width:"50px", height:"50px", '&:hover':{opacity:'0.6'} }}/>
        <img src={props.images[activeImage].imgUrl} alt="image" className="w-[80%] h-full object-cover"/>
        <ArrowRight onClick={ handleNextImage} sx={{cursor:"pointer", width:"50px", height:"50px", '&:hover':{opacity:'0.6'}}}/>
        </>
    //  </div>
  )
}

export {ImageSlider}
