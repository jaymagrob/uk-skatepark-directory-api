class Auth {
  static setToken(token) {
    localStorage.setItem('token', token)
  }
  static getToken() {
    return localStorage.getItem('token')
  }
  static removeToken() {
    return localStorage.removeItem('token')
  }
}

export default Auth