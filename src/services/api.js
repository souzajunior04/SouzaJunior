import axios from 'axios'

const planet = axios.create({
    baseURL: 'https://www.swapi.co/api/'
})

export default planet;