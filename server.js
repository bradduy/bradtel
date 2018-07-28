let express = require('express');
let path = require('path');

let app = express();
app.use(express.static(path.join(__dirname, '/view')));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(process.env.PORT || 3000, () => console.log('Server started!'));