import { createContext } from "react"

export const GlobalStore = createContext()

function MainStore({childern}) {
    const data = {
        
    }
  return (
 <GlobalStore.Provider value={data}>
    {childern}
 </GlobalStore.Provider>
  )
}

export default MainStore