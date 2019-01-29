const Sequelize = require('sequelize');
const dbConfig = require('../config/dbconfig');

class Database {
    createConnection() {
        this.sequelize = new Sequelize(dbConfig.database, dbConfig.login, dbConfig.password, {
            host: dbConfig.host,
            dialect: 'postgres',
            operatorsAliases: false,

            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000,
            },
        });

        this.sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch((err) => {
                console.error('Unable to connect to the database:', err);
            });

        return this.createTables();
    }

    /**
     * @return {Promise}
     */
    createTables() {
        this.createUserTable();
        this.createPasswordTable();

        this.user.hasOne(this.password);

        return Promise.all([this.user.sync(), this.password.sync])
            .then(result => console.log('sync success', result))
            .catch(e => console.log(e));
    }

    createPasswordTable() {
        this.password = this.sequelize.define('password', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            password: Sequelize.INTEGER,
        });
    }

    createUserTable() {
        this.user = this.sequelize.define('user', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            login: {
                type: Sequelize.STRING,
                unique: true,
            },
            first_name: Sequelize.STRING,
            last_name: Sequelize.STRING,
            birthday: Sequelize.DATE,
            email: Sequelize.STRING,
            image_url: Sequelize.STRING,
        });
    }

    /**
     * @param {Model} model
     */
    dropTable(model) {
        model.drop()
            .then(() => console.log('Table deleted'))
            .catch(e => console.log(e));
    }
}

// const db = new Database();
// db.createTable('name', [{name: 'name', type: 'integer'}]);

module.exports.db = new Database();
