// const URL = "https://peterrambeckandersen.com/person/api/person/all";
const URL = "https://peterrambeckandersen.com/tomcat/person/api/person/all";

function handleHtttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function makeOptions(method, body) {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

function getAllUsers() {
  return fetch(URL).then(handleHtttpErrors);
}

function addPerson(person) {
  const options = makeOptions("POST", person);
  return fetch(URL, options).then(handleHtttpErrors);
}

const personFacde = {
  getAllUsers,
  addPerson,
};

export default personFacde;
