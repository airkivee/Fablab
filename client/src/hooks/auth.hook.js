import {useState, useCallback, useEffect} from 'react'
const storageName = 'user'
export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)

  const login = useCallback((jwtToken, userId, username, checkbox) => {
    setToken(jwtToken)

    checkbox&&localStorage.setItem(storageName, JSON.stringify({
       token: jwtToken, username:username, userId:userId
    }))
  }, [])
  const logout = useCallback(() => {
    setToken(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {
      login(data.token)
    }
    setReady(true)
  }, [login])
  return { login, logout, token, ready  }
}
