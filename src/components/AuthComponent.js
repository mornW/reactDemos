import { getToken } from '@/utils'
import { Navigate} from 'react-router-dom'

function AutoComponent({children}) {
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace></Navigate>
  }
}
export {AutoComponent}