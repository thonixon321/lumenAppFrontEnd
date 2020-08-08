import axios from 'axios'

export const axiosHandler = {
  data() {
      return {
        api_token: null
      }
  },

  methods: {
    sendAxios(payLoadObj, settingsObj) {
      let axiosUrl = settingsObj.url,
          axiosMethod = settingsObj.method,
          params = {},
          data = {},
          headerObj = {
            'Content-Type': 'application/json',
            'Authorization': this.$store.state.api_token
          };
    console.log(payLoadObj, settingsObj)
      if (axiosMethod == 'GET') {
        params = payLoadObj;
      }else {
        data = payLoadObj;
      }

      //send request
      axios({
        method: axiosMethod,
        url: axiosUrl,
        withCredentials: false, // ????
        data: data,
        headers: headerObj,
        params: params
      })
      .then(
        result => settingsObj.callBack(result)
      )
      .catch(
        error => console.log(error)
      )
    }
  }
}