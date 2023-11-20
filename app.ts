import express from "express";

const app = express();
const path = require("path");

const PORT = 3030;

app.set('views', '${ __dirname }/build');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/', express.static(`${__dirname}/build`));
app.get('/', (req, res) => {
	// res.render('/html/challenge_01', {});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});