import db from "../../../database";

export default async (req, res) => {
	try {
		console.log("in this database!!!");
		const docRef = db.collection('users').doc('alovelace');
		console.log("in this database!!!");
		await docRef.set({
			first: 'Ada',
			last: 'Lovelace',
			born: 1815
		});
	} catch (e) {
		res.status(400).end();
	}
}