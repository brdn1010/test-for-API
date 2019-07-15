const axios = require("axios");

axios.post('http://localhost:3001/api/did',{
    publicKey : 'GHAAQWPDMTNTIHMLXEQJWQWQETVTFQTGEXXYJKUDOJBKCYKTLUXEFVMOF9LKWHYHDFNETPKVLVJEIENGZBYEXVSCHB'
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });