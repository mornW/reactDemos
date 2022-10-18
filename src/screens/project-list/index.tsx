import { SearchPanel } from "./search-panel";
import { List } from "./list";
import React, { useState, useEffect } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils/util";
// import qs from "qs";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

// const apiURL = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 2000);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
    // fetch(
    //   `${apiURL}/projects?${qs.stringify(cleanObject(debounceParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceParam]);

  useMount(() => {
    client("users", {}).then(setUsers);
    // fetch(`${apiURL}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>

      <List users={users} list={list}></List>
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
