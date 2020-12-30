import React, { useState } from "react";

export default function useModal() {
  const [isOpen,setOpen]=useState(false)
  function handlerOpenModal (){
    setOpen(!isOpen)
  }
  return {isOpen,handlerOpenModal}
}
