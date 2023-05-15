require('dotenv').config();
const { Sequelize, QueryTypes } = require('sequelize');
const express = require('express');
const app = express();

const sequelize = new Sequelize(process.env.DATABASE_URL);

const main = async () => {
	try {
		await sequelize.authenticate();
		const blogs = await sequelize.query('SELECT * FROM blogs', {
			type: QueryTypes.SELECT,
		});
		blogs.forEach((blog) =>
			console.log(`${blog.author}: `, `${blog.title}, `, `${blog.likes} likes`)
		);
		sequelize.close();
	} catch (error) {
		console.error(`Can't connect to the DB`, error);
	}
};

main();
