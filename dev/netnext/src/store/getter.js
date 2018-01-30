const getters = {
    access_token: state => state.user.access_token,
    username: state => state.user.name,
    logo: state => state.user.logo,
    occupation: state => state.user.occupation,
    project_count: state => state.user.project_count,
    exhibits_count: state => state.user.exhibits_count
}

export default getters;