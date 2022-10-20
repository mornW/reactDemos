import { SearchPanel } from "./search-panel";
import { List } from "./list";
import React from "react";
import { useDebounce, useDocumentTitle } from "../../utils/util";

import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProjects } from "utils/projects";
import { useUsers } from "utils/user";
import { useProjectsSearchParams } from "./util";
// import { Helmet } from "react-helmet";

export const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();

  const {
    isLoading,
    error,
    data: list,
  } = useProjects(useDebounce(param, 2000));
  const { data: users } = useUsers();
  useDocumentTitle("项目列表", false);

  return (
    <Container>
      {/* <Helmet>
        <title>请登录或注册以继续</title>
      </Helmet> */}
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

ProjectListScreen.whyDidYouRender = true;

const Container = styled.div`
  padding: 3.2rem;
`;
