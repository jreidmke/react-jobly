import axios from 'axios';

class JoblyApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
      // paramsOrData._token = ( // for now, hardcode token for "testing"
      // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc" +
      // "3RpbmciLCJpc19hZG1pbiI6ZmFsc2UsImlhdCI6MTU1MzcwMzE1M30." +
      // "COmFETEsTxN_VfIlgIKw0bYJLkvbRQNgO1XCSE8NZ0U");

      console.debug("API Call:", endpoint, paramsOrData, verb);

      try {
        return (await axios({
          method: verb,
          url: `http://localhost:3001/${endpoint}`,
          [verb === "get" ? "params" : "data"]: paramsOrData})).data;
          // axios sends query string data via the "params" key,
          // and request body data via the "data" key,
          // so the key we need depends on the HTTP verb
      }

      catch(err) {
        console.error("API Error:", err.response);
        let message = err.response.data.message;
        throw Array.isArray(message) ? message : [message];
      }
    }

    static async allCompanies(search) {
      let res = await this.request(`companies`);
      console.log(res);
      return search ? res.companies.filter(c => c.name.indexOf(search) !== -1) : res.companies
    }

    static async getCompany(handle) {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    }

    static async allJobs() {
      let res = await this.request(`jobs`);
      return res.jobs;
    }

    static async getJobsByCompany(handle) {
      let res = await this.request(`jobs`);
      let jobs = res.jobs.filter(job => job.companyHandle === handle);
      return jobs;
    }

    static async login(data) {
      let res = await this.request(`auth/login`, data, `post`);
      localStorage.setItem('_token', res.token);
      return res.token;
    }

    static async register(data) {
      let res = await this.request(`auth/register`, data, `post`);
      localStorage.setItem('_token', res.token);
      return res.token;
    }

    static async getCurrentUser(username) {
      const token = localStorage.getItem('_token');
      // let res = await this.request(`users/${username}`);
      let res = await axios.get(`http://localhost:3001/users/${username}`, {}, {
        headers: {
          'authorization': token
        }
      })
      return res.user;
    }
  }

export default JoblyApi;