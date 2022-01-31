import React from 'react'

function Alert (probs){
  const capital= (word)=>{
    let newWord = word.toLowerCase()
    return newWord.charAt(0).toUpperCase() + newWord.slice(1)
  }
  return(
        probs.alert &&
    <>

    <div className={`alert alert-${probs.alert.type} alert-dismissible fade show` } role="alert">
        <strong>{capital(probs.alert.type)}</strong> : {probs.alert.meg}
   </div>
    </>
  )
}


export default Alert;
