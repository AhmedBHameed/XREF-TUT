import express from 'express';
import path from 'path';

declare let global: any, __dirname: string;
const app = express();
const port = global.process.env.PORT || '5000';

app.set('port', port);
app.use(express.static(__dirname + '/public'));
app.get('/typescript', (req: any, res: any) => {
	res.set('Content-Type', "text/html")
		.sendFile(path.join(__dirname, '/public/typescript/index.html'))
});
app.get('/mapapp', (req: any, res: any) => {
	res.set('Content-Type', "text/html")
		.sendFile(path.join(__dirname, '/public/mapapp/src/index.html'))
});

app.listen(app.get('port'), () => {
	console.log("Node app is running at localhost:" + app.get('port'));
})