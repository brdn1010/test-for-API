const axios = require("axios");

axios.post('http://localhost:3001/api/did',{
    publicKey : 'GHAAQWPDMTNTIHMLXEQJWQWQETVTFQTGEXXYJKUDOJBKCYKTLUXEFVMOF9LKWHYHDFNETPKVLVJEIENGZBYEXVSCHB'
    //這裡應該放置本地RSA的公鑰
})
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
