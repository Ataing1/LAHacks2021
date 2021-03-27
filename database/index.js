const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
	projectId: 'tables-b1bed',
	keyFilename: process.env.GCLOUD_CREDENTIALS,
});



export default db;