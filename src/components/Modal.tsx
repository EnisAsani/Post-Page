import { useModalContext } from "../context/modalContext"

const Modal = (props: any) => {

  const {handleModalClose} = useModalContext()

  return (
    <>
    <div onClick={handleModalClose} className='absolute top-[100%] left-0 w-full 
    flex justify-center items-center
    h-screen bg-slate-950/40 z-10'>
    </div>
   
    <div  className="absolute w-[50%] 
    top-[250%] left-[20%] z-20 flex items-center justify-center">
      <div className="w-full min-w-[300px] h-[300px] flex items-center mx-auto relative z-50 ">
    {props.children}
    </div>
    </div>
    </>
  )
}

export {Modal}
