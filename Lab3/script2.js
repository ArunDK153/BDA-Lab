db.createCollection('Customers')

db.Customers.insertMany([{
        custid: 1,
        AccBal: 4000,
        AccType: "Savings"
    },
    {
        custid: 2,
        AccBal: 500,
        AccType: "Savings"
    },
    {
        custid: 3,
        AccBal: 10000,
        AccType: "Current"
    },
    {
        custid: 4,
        AccBal: 1500,
        AccType: "Current"
    },
    {
        custid: 5,
        AccBal: 800,
        AccType: "Current"
    },
])

db.Customers.find({
    AccBal: {
        $gte: 1200
    },
    AccType: "Savings"
})

db.Customers.aggregate([{
    $group: {
        "_id": "$custid",
        "maxBalance": {
            $max: "$AccBal"
        },
        "minBalance": {
            $min: "$AccBal"
        },
    }
}])

// mongoexport -d CustomerDB -c Customers -f custid,AccBal,AccType --type csv -o customers.csv

db.Customers.drop()

// mongoimport -d CustomerDB -c Customers --type csv --file customers.csv --headerline