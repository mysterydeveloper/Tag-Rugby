exports.run= function(query, res, pool){
    pool.query(query, (error, results) => {
        if (error) {
        throw error
        }
        res.status(200).json(results.rows)
    })
}