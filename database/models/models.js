const db = require ('../index.js')
const Sequelize = require ('sequelize')

const Student = db.define('student', {
	name: {type: Sequelize.STRING, allowNull: false},
	year: {type: Sequelize.ENUM('Freshman', 'Sophomore', 'Junior', 'Senior'), allowNull: false}
})

const School = db.define('school', {
	name: {type: Sequelize.STRING, allowNull: false},
	location: {type: Sequelize.STRING, allowNull: false}
})

Student.belongsTo(School)
School.hasMany(Student)
module.exports = {School, Student}

