import axios from "axios";

export const getUsers = async () => {
    let users = []
    await axios({
        method: 'get',
        url: 'http://localhost:3004/users',
        responseType: 'json'
    })
    .then(function ({data}) {
        users = data
    });
    return users;
}
export const getUser = async (id) => {
    let user = []
    await axios({
        method: 'get',
        url: 'http://localhost:3004/users/'+id,
        responseType: 'json'
    })
    .then(function ({data}) {
        user = data
    });
    return user;
}

export const save = async (user) => {
    const users = await getUsers()
    await axios({
        method: 'post',
        url: 'http://localhost:3004/users',
        data: {...user, id: users.length+1}
    })
}

export const update = async (user) => {
    const users = await getUsers()
    await axios({
        method: 'put',
        url: 'http://localhost:3004/users/'+user.id,
        data: {...user}
    })
}
export const deleteUser = async (id) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3004/users/'+id,
    })
}