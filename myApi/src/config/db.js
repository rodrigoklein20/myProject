import pg from 'pg'
const Client = pg.Client

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'admin',
  port: 5432,
})



export default client;