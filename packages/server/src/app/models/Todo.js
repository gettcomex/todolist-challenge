module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    status: DataTypes.STRING
  })

  return Todo
}
