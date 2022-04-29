import db from '../models/index.js';
import getDatabase from '../lambdas/getDatabase.js';

export default function RecipeService() {
	const Recipe = db.Recipe;
	const dbo = getDatabase();
	const dbConnect = dbo.getDb();
	console.log(Recipe);

	return {
		add(req, res) {
			const recipe = new Recipe(req.body);
			recipe.save(function (err) {
				if (err) {
					res.status(500).send({ message: err });
					console.log('레시피 저장 실패 ? ' + err);
					return;
				} else {
					res.status(200).json({ result: 'ok' });
				}
			});
		},
		async getRecipe(req, res) {
			const recipes = await Recipe.find({});
			res.send(recipes);
		},
		async modify(req, res) {
			console.log('내부 진입');
			await Recipe.findByIdAndUpdate(
				req._id,
				{ recipe: req.recipe },
				{
					new: true,
				}
			).exec();
		},
	};
}
