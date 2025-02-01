const pg = require('pg-promise')
const pgc = pg()

// add your conection string

const str = 'postgresql://frlopez:I5wYY8Wvid3KvS5G0VS5zMHr4fUWBIJ3@dpg-cu9e24hu0jms73fe07j0-a.oregon-postgres.render.com/codex_11pa?ssl=true'

const db = pgc(str)

db.connect()
    .then(() => {
        console.log("Success Connection")
    })
    .catch((err) => {
        console.log(` Error Connection ${err} `)
    })

exports.default = db