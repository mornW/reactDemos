import qs from "qs";
import * as auth from "auth-provider";
import { useAuth } from "context/auth-context";
const apiURL = process.env.REACT_APP_API_URL;

interface Config extends RequestInit {
  token?: string;
  data?: object;
}
export const http = (
  endpoint: string,
  { data, token, headers, ...customConfig }: Config = {}
) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": data ? "application/json" : "",
    },
    ...customConfig,
  };

  if (config.method.toUpperCase() === "GET") {
    endpoint += `?${qs.stringify(data)}`;
  } else {
    config.body = JSON.stringify(data || {});
  }
  return window
    .fetch(`${apiURL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.status === 401) {
        await auth.logout();
        window.location.reload();
        return Promise.reject({ message: "请重新登录" });
      }
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
};

export const useHttp = () => {
  const { user } = useAuth();
  return (...[endpoint, config]: Parameters<typeof http>) =>
    http(endpoint, { ...config, token: user?.token });
};

// Parameters Omit Partial Exclude
// about TS
// type Person = {
//   name: string,
//   age: number
// }
// const xiaoMing: Partial<Person> = {}
// const shenMiRen: Omit<Person, 'age' | 'name'> = {}
// type PersonKeys = keyof Person
// type PersonOnlyName = Pick<Person,'age'|'name'>
// type Age = Exclude<PersonKeys,'name'>
