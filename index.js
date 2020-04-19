const Typography = require("typography");
const plugin = require("tailwindcss/plugin");

const DEFAULT_CONFIG = {
	includeNormalize: false,
};

module.exports = function (config) {
	const theme = new Typography(Object.assign(DEFAULT_CONFIG, config));

	return plugin(function ({ addBase }) {
		addBase(theme.toJSON());
	});
};
