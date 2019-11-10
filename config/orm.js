let connection;

const orm = {
    connectDb: async() => {
        connection = await require('./connection')();
    },

    closeDBConnnection: function() {
        return connection.end();
    },

    selectAll: async({ tableName, colName, val }) => {
        try {
            const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
            const results = await connection.query(
                queryString, [tableName, colName, val]
            );
            console.table(results);
        } catch (err) {
            console.table(err)
        }
    },
    insertOne: async({ tableName, colName1, colName2, val, val2 }) => {
        try {
            const queryString = 'INSERT INTO ?? (??, ??) VALUES (?,?)';
            const results = await connection.query(
                queryString, [tableName, colName1, colName2, val1, val2]
            );
            console.table(results);
        } catch (err) {
            console.table(err)
        }
    },
    updateOne: async({ tableName, colName, val }) => {
        try {
            const queryString = 'UPDATE ?? SET ?? = ?? WHERE id = ?';
            const results = await connection.query(
                queryString, [tableName, colName, val]
            );
            console.table(results);
        } catch (err) {
            console.table(err)
        }
    }
}

module.exports = orm