import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import authRouter from './routes/auth';

const app: express.Application = express();

// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "../views"));
// app.set('views', 'views');
// app.use(express.static(path.join(__dirname, 'public')));

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );


app.use(bodyParser.urlencoded({extended: false}));
app.use(authRouter);

export { app };