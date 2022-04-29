import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserModel from './User.js';
import TodoModel from './Todo.js';
import RecipeModel from './Recipe.js';
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dotenv.MONGO_URI;
db.User = new UserModel(mongoose);
db.Todo = new TodoModel(mongoose);
db.Recipe = new RecipeModel(mongoose);

export default db;
