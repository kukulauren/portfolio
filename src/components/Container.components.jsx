import React from 'react'

const ContainerComponents = ({children}) => {
  return (
    <div className=" max-w-[1200px] mx-auto  ">
      {children}
    </div>
  );
}

export default ContainerComponents