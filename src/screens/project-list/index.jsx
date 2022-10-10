import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useState,useEffect } from "react"
import { cleanObject,useDebounce } from "../../utils/util"
import qs from 'qs'

const apiURL = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
  const [param,setParam] = useState({
    name: "",
    personId: ""
  })
  const [list,setList] = useState([])
  const [users,setUsers] = useState([])
  const debounceParam = useDebounce(param,2000)

  useEffect(()=> {
    fetch(`${apiURL}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  },[debounceParam])

  useEffect(() => {
    fetch(`${apiURL}/users`).then(async response => {
      if (response.ok) {
        setUsers(await response.json())
      }
    })
  },[])

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>

    <List users={users} list={list}></List>
  </div>
}