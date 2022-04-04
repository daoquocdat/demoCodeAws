import { AppDataSource } from "./data-source"
import {createConnection} from 'typeorm'
import * as express from "express"
import { User } from "./entity/User"
import userRouter from "./routers/user"

const app = express()
app.use(express.json());
AppDataSource.initialize().then(async () => {
    console.log("connect")
    

}).catch(error => console.log(error))

// createConnection();

app.use(userRouter);
app.listen(3000)