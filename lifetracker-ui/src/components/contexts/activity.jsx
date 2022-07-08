import { createContext, useState, useContext, useEffect } from "react"

const ActivityContext = createContext(null)

export const ActivityContextProvider = ({children}) => {
  const [activity, setActivity] = useState()
  const [initialized, setInitialized] = useState()
  const [isLoading, setIsLoading] = useState()
  const [error, setError] = useState()

  const activityValue = {activity, setActivity, initialized, setInitialized, isLoading, setIsLoading, error, setError}

  

  // useEffect(() => {
  //   if(props.isLoggedIn) {
  //     navigate("/activity")
  //   }
  // }, [props.isLoggedIn])

  return (
    <ActivityContext.Provider value={activityValue}>
      <>{children}</>
    </ActivityContext.Provider>
  )

}

export const useActivityContext = () => useContext(ActivityContext)