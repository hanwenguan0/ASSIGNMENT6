/**
 * Given subreddit's name, issue api req and parse response with
 * `title`, `score`, `subredditSubscribers`, and `subredditId`
 *
 * @param subredditName - input subreddit name ie `javascript`
 * @return promise response obj with above properties
 */
export default function fetchPosts() {
  return fetch(`https://api.github.com/orgs/nodejs/members`)
    .then((res) => res.json())
    .then((body) => parsePostResponse(body));
}
function parsePostResponse(body) {
  return body.map((data) => {
    return {
      url: data.url,
      login: data.login,
      avatar_url: data.avatar_url,
      id: data.id,
      repos_url: data.repos_url
    };
  });
}
/**
 * Gets posts by profile
 * @return promise containing response obj with below props
 */
export function fetchPostsByProfile(url) {
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((body) => parseprofileResponse(body));
}
function parseprofileResponse(body) {
  return {
    email: body.email,
    name: body.name,
    location: body.location
  }
}
/**
 * Gets posts by repo
 * @return promise containing response obj with below props
 */

export function fetchPostsByRepo(url) {
  console.log(url)
  return fetch(`${url}`)
    .then((res) => res.json())
    .then((body) => parserepoResponse(body));
}
function parserepoResponse(body) {
  return body.map((data) => {
    console.log(data)
    return {
      name: data.name,
      nameurl: data.html_url,
      description: data.description
    };
  });
}

