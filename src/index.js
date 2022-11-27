require('dotenv').config();

const app = require('./Backend/server');
require('./Backend/database');

console.log(process.env.TESTING);

app.listen(app.get('port'),function(req,res){
    console.log('Server on port ', app.get('port'));
});