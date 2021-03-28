import db from "../../../database";

export default async (req, res) => {
	try {
		console.log("in this database!!!");
		const docRef = db.collection('user_graphs').doc('user_ids');
		console.log("in this database!!!");
		const users = {
			1: 'aditya',
			2: 'andrew',
			3: 'daniel',
			4: 'malin',
			5: 'vaughn'
		}
		await docRef.set(users, {merge: true});
		res.send("we good");
	} catch (e) {
		res.status(400).end();
	}
}