export default function greet(after = 1000, ...who) {
	if (typeof after !== "number") 
		[after, who] = [5000, [after, ...who]];	
	let names = who.join(' ');
	const printH1 = () => document.body.innerHTML+=`<h1>Hello ${names}</h1>`;
	setTimeout(printH1, after);	
	console.log(`Will greet #${who.length} in ${after/1000} sec`);
}