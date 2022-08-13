module.exports = {
	printWidth: 100,
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.json',
			options: {
				parser: 'json',
				printWidth: 100,
				tabWidth: 2,
			},
		},
		{
			files: '*.md',
			options: {
				printWidth: 100,
				proseWrap: 'never',
				trailingComma: 'none',
			},
		},
	],
};
