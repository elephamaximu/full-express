import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import RecipeService from '../services/recipe.js';
dotenv.config();
const corsOptions = {
	origin: process.env.ORIGIN,
	optionsSuccessStatus: 200,
};
const app = express();
app.use(cors());
app.use(function (_req, res, next) {
	res.header(
		'Access-Control-Allow-Headers',
		'x-access-token, Origin, Content-Type, Accept'
	);
	next();
});

app.post('/add', (req, res) => {
	console.log(' Recipe 들어옴 ');
	RecipeService().add(req, res);
});
app.get('/getRecipe', (req, res) => {
	console.log(' Recipe 들어옴 ');
	RecipeService().getRecipe(req, res);
});
app.post('/modify', (req, res) => {
	console.log(' Recipe 들어옴 ');
	RecipeService().modify(req, res);
});
export default app;
