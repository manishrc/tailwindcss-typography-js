import test from 'ava';
import tailwindcssTypographyJs from '.';

test('title', t => {
	t.throws(() => {
		tailwindcssTypographyJs(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(tailwindcssTypographyJs('unicorns'), 'unicorns & rainbows');
});
