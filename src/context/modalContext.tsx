import { useContext, createContext, ReactNode, useState } from "react";

type modalContextChildrenProps = {
    children: ReactNode
}


type ModalContext = {
    activeModal: any,
    handleActiveteModal: (index:number) => void,
    handleModalClose: () => void,
    handleSelectedImage: (index:number)=> void,
    selectedImageIndex: number | null,

}

const ModalContext = createContext({} as ModalContext)

export function useModalContext() {
    return useContext(ModalContext) 
}


export function ModalContextProvider ({children}: modalContextChildrenProps)  {

  const [activeModal, setActiveModal] = useState<any>(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    const handleActiveteModal = (index:number) => {
        setActiveModal(true)
        setSelectedImageIndex(index)
    }

  const handleModalClose = () => {
    setActiveModal(false)
  }

  const handleSelectedImage = (index:number) => {
    setSelectedImageIndex(index)
  }

    return <ModalContext.Provider value={{handleModalClose, activeModal,
     handleActiveteModal, selectedImageIndex, handleSelectedImage}}>
        {children}
    </ModalContext.Provider>
}
