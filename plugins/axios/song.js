import { axios } from '@nuxtjs/axios'

const base = process.env.API_BASE_URL
const endpoint = base + '/songs'

export default {
  getSongs(query) {
    return axios.$get(endpoint, query)
  },
}
