module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        // id가 기본적으로 들어있다.
        email: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        charset: 'utf8', // 한글 저장_1
        collate: 'utf8_general_ci', // 한글 저장_2
    });
    User.associate = (db) => { };
    return User;
};