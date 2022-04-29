export default function RecipeModel(mongoose) {
	const recipeSchema = mongoose.Schema(
		{
			cook: String,
			recipe: String,
		},
		{ timestamps: true }
	);

	return mongoose.model('Recipe', recipeSchema);
}
