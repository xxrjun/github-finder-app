import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Search and get users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const users = await axios
    .get(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    .then((response) => {
      // console.log(response.data);
      const { items } = response.data;
      return items;
    })
    .catch((err) => {
      console.log(err);
    });

  return users;
};

// Get single user and repos
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "updated",
    per_page: 10,
  });

  // Get sing user
  const userData = await axios
    .get(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    .then((response) => {
      // console.log(response.data);
      if (response.status === 404) {
        window.location = "/notfound";
      } else {
        const data = response.data;
        return data;
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // Get repos
  const reposData = await axios
    .get(`${GITHUB_URL}/users/${login}/repos?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })
    .then((response) => {
      // console.log(response.data);
      if (response.status === 404) {
        window.location = "/notfound";
      } else {
        const data = response.data;
        return data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
  return { user: userData, repos: reposData };
};
