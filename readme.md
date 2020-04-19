# tailwindcss-typography-js [![Build Status](https://travis-ci.com/manishrc/tailwindcss-typography-js.svg?branch=master)](https://travis-ci.com/manishrc/tailwindcss-typography-js)

> Tailwind CSS plugin to inject Typography.js styles

## Install

```
$ npm install --save tailwindcss-typography-js
```

## Usage

```js
// tailwindcss.config.js
const typography = require("tailwindcss-typography-js");

// Option 1 - Using a configuration
const typographyTheme = typography({
	baseFontSize: "18px",
	baseLineHeight: 1.666,
	headerFontFamily: ["Helvetica Neue", "sans-serif"],
	bodyFontFamily: ["Georgia", "serif"]
});

// Option 2 - Using a theme
import funstonTheme from "typography-theme-funston";
const typographyTheme = typography(funstonTheme);

// Add to the plugin list.
module.exports = {
	theme: {
		extend: {}
	},
	variants: {},
	plugins: [typographyTheme],
	corePlugins: {}
};
```
