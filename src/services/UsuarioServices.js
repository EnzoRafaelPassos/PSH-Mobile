import axios from "axios"

class UsuarioService{
    async login(data){
        return axios({
            url: "http://192.168.1.14:4100/login",
            method: "POST",
            timeout:5000,
            data: data,
            headers: {
                Accept: 'application/json'
            }
        }).then((response) => {
            return Promise.resolve(response)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const usuarioService = new UsuarioService()

export default usuarioService;