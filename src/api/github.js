import request from "../util/request";

const getUser = user => request(`https://api.github.com/users/${user}`);

export { getUser };
