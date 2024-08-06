const List = require('./List');
const User = require('./User');

User.hasMany(List, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

List.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { List, User };
