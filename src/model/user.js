const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:jFlwFaTQ@121.36.25.154:3306/wan') // Postgres 示例

const User = sequelize.define('t_user', {
    // 在这里定义模型属性
    id: {
        type: DataTypes.NUMBER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
        // allowNull 默认为 true
    }
}, {
    // 这是其他模型参数
});

// `sequelize.define` 会返回模型
console.log(User === sequelize.models.User); // true

module.exports = User
