const postFetch = async (url, body) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
  return res;
};

export default postFetch;
