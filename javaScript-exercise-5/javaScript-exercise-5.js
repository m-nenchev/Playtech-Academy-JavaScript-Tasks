let students = [
	{ name: "Ivan", socre: 5 },
	{ name: "Dimitar", socre: 5.5 },
	{ name: "Kristian", socre: 4 },
	{ name: "Valentin", socre: 6 },
	{ name: "Veselin", socre: 3 },
	{ name: "Genadi", socre: 5 },
	{ name: "Yavor", socre: 3 },
	{ name: "Marin", socre: 5.5 },
	{ name: "Kalin", socre: 3 },
	{ name: "Yavor", socre: 6 }
];

let newStudents = []
newStudents = students.filter(x => x.socre > 5.5).map(x => x.name).toString()

console.log(`"Students with a grade above 5.50 =>" ${newStudents}`);