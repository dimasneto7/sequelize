const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts', 'root', 'abc123', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
  sequelize.authenticate()
  console.log('Conectamos ao banco com sucesso!!!')
} catch (err) {
  console.log(`Não foi possível conectar ao banco: ${err}`)
}

module.exports = sequelize
