import * as mongoose from "mongoose";
import config from '../config';
const { dbUri } = config

export const connect = async () => {
    try {
    const connection = await mongoose.connect(`${dbUri}`);
    if(connection) console.log('Database Connected Successfully...');
  } catch (err) {
    console.log('\x1b[31m%s\x1b[0m', 'Error while connecting database\n');
    console.log(err);
  }
};
