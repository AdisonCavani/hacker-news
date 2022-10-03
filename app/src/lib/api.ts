const story = (path: string) => `https://node-hnapi.herokuapp.com/${path}`;
const user = (path: string) =>
  `https://hacker-news.firebaseio.com/v0/${path}.json`;

export default function fetchAPI(path: string) {
  const url = path.startsWith("user") ? user(path) : story(path);

  return fetch(url).then((r) => r.json());
}
