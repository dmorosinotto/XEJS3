export function* gen(n) {
	for(let i=0;i<n;i++) yield `ciao ${i}`;
}