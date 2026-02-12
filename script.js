const makeChange = (c) => {
  // your name here
		let quarter = Math.floor(c/25);
		let c = c%25;
		let dime = Math.floor(c/10);
		let c = c % 10;
		let nickel = Math.floor(c/5);
		let c = c%5;
		let penny = math.floor(c/1);
		let c = c%1;
	return {quarter, nickel, dime, penny};
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
