function reduce (f, acc, xs) {
	if(xs.length === 0) return acc;
	return reduce(f, f(acc, xs[0]), xs.slice(1, xs.length));
}

function map(f) {
	return (reducer) => (acc, x) => reducer(acc, f(x));
}

function filter(f) {
	return (reducer) => (acc, x) => f(x) ? reducer(acc, x) : acc;
}

function take(count) {
	return (reducer) => (acc, x) => {
		return acc.length < count ? reducer(acc, x) : acc;
	}
}

function transduce(ts, f, acc, xs){
	return reduce(ts(f), acc, xs);
}
