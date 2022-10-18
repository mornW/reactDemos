import { SearchPanel } from "./search-panel";
import { List } from "./list";
import React, { useState } from "react";
import { useDebounce } from "../../utils/util";

import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/projects";
import { useUsers } from "utils/user";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  // const [isLoading,setIsLoading] = useState(false)
  // const [error,setError] = useState<null | Error>(null)
  // const [list, setList] = useState([]);
  // const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 2000);

  const { isLoading, error, data: list } = useProjects(debounceParam);
  const { data: users } = useUsers();

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users || []}
      ></SearchPanel>
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        loading={isLoading}
        users={users || []}
        dataSource={list || []}
      ></List>
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
