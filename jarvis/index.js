let api = require('marvel-api');
 
let marvel = api.createClient({
  publicKey: '68fea4470242ddf044acfbd313373d71',
  privateKey: 'be5cbbf01615901113e48732c49f7f9415f81c06'
});

marvel.characters.findAll((err, results) => {
  if (err) {
    return console.error(err);
  }
  console.log(results);
});
