export function addfollowers(name) {
  fetch(`/follower-number`,{
    method:"post",
    body:name
  })
}

export function deletefollowers(name) {
  return fetch(`/follower-number`, {
    method: "delete",
    body:name
  });
}
