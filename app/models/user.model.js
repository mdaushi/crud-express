module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user',{
        nama: {type: Sequelize.STRING}
    });

    return User;
}