import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as authRoutes from './routes/auth';

const app: express.Application = express();

// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname, "../views"));
// app.set('views', 'views');
// app.use(express.static(path.join(__dirname, 'public')));

app.set( "views", path.join( __dirname, "views" ) );
app.set( "view engine", "ejs" );


app.use(bodyParser.urlencoded({extended: false}));
app.use('/login', (req, res, next) => {
   res.render('index');
   // res.send('Hello world')
   // res.render('/index', {
   //    path: '/login',
   //    pageTitle: 'Login',
   //    errorMessage: 'errorasdlfkjasd',
   // });
});

export { app };