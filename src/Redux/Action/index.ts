function cacheUser(user:userMeg) {
    return {
        type: "userLogin",
        user
    }
}
export {cacheUser}