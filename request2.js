db.tracks.aggregate([
    {
        $match: {
            tags: 'new'
        }
    },
    {
        $sample: {
            size: 2
        }
    },
    { $project: { _id: 0, title: 1 } }
])

db.users.aggregate([
    { $sort: { balance: 1 } },
    { $limit: 1 },
    { $project: { _id: 0, fullname: 1 } }
])

db.users.find(
    { balance: { $gt: 0 } },
    { fullname: 1, _id: 0 }
)


db.users.aggregate([
    { $match: { balance: {$gt: 0, $lt: 1000} } },

    { $count: "sorted_users"}
])
/*Агрегация в MongoDB выполняется как последовательность операций.
Каждая следующая операция выполняется, отталкиваясь от результата предыдущей операции.*/
