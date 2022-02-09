import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { "API-KEY": "7605bccb-a49f-4971-a51b-bd789708e384" }
})

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
      .then(response => response.data)
  },
  follow(usersID) {
    return instance.post(`follow/${usersID}`)
  },
  unfollow(usersID) {
    return instance.delete(`follow/${usersID}`)
  },
  getProfile(usersID){
    return instance.get(`profile/` + usersID)
  },
}

export const authAPI = {
  me(){
    return instance.get(`auth/me`)
  }
}
