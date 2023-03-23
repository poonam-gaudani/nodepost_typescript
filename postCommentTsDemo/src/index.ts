import * as express from 'express';
import routes from "./routes";
import config from './config';
import * as database from "./middlewares/database";
const { port } = config;

const app = express();
database.connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});