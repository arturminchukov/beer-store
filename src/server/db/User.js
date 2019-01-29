const Sequelize = require('sequelize');

class User {
    /**
     * @param {{login: string, password: string}} user
     */
    add(user) {
        if (!user.login || !user.password) {
            console.log('No login or password property in user object');
            return;
        }

        this.user.sync({force: true})
            .then(() => this.user.create(user));
    }

    /**
     * @param {{login: string, password: string}} user
     */
    async find(user) {
        if (!user.login || !user.password) {
            console.log('No login or password property in user object');
            return false;
        }

        const result = await this.user.sync({force: true})
            .then(() => this.user.findOne({
                where: {
                    user,
                },
            }))
            .catch(e => console.log(e));

        return result;
    }

    /**
     * @param {{login: string, password: string}} user
     *
     * @return {boolean}
     */
    async check(user) {
        const result = await this.find(user);

        return Boolean(result);
    }

    /**
     * @param {string} login
     */
    async delete(login) {
        if (!login) {
            console.log('No such user');
            return false;
        }

        const result = await this.user.destroy({
            where: {
                login,
            },
        });

        return Boolean(result);
    }
}

module.exports = User;
