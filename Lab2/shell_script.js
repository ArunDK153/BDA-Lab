db.Employee.insertMany([{
        _id: 1,
        Name: "Madan Lal",
        Dept: 1001,
        Age: 32,
        Salary: 50000.00
    },
    {
        _id: 2,
        Name: "Murali S",
        Dept: 1002,
        Age: 24,
        Salary: 39000.00
    },
    {
        _id: 3,
        Name: "Akshay G",
        Dept: 1006,
        Age: 26,
        Salary: 45000.00
    },
    {
        _id: 4,
        Name: "Anupriya M",
        Dept: 1004,
        Age: 22,
        Salary: 30000.00
    }
])
db.Employee.insert({
    _id: 5,
    Name: "John Cummins",
    Dept: 1004,
    Age: 40,
    Salary: 70000.00
})
db.Employee.update({
    _id: 5
}, {
    $set: {
        Dept: 1005
    }
}, {
    upsert: true
})
db.Employee.update({
    _id: 6
}, {
    $set: {
        Dept: 1006
    }
}, {
    upsert: false
})

db.Department.insertMany([{
        _id: 1001,
        Name: "R&D",
        Manager: "Shikha K"
    },
    {
        _id: 1002,
        Name: "IT",
        Manager: "Shyam Mohan"
    },
    {
        _id: 1004,
        Name: "HR",
        Manager: "Shakti D"
    },
    {
        _id: 1005,
        Name: "Test",
        Manager: "Preethi M"
    }
])
db.Department.update({
    _id: 1005
}, {
    $set: {
        Name: "Sales"
    }
}, {
    upsert: true
})
db.Department.update({
    _id: 1008
}, {
    $set: {
        Name: "Marketing"
    }
}, {
    upsert: false
})
db.Department.save({
    _id: 1006,
    Name: "Training",
    Manager: "Mohan Kumar"
})

db.Employee.update({
    _id: 1
}, {
    $set: {
        Sex: "Male"
    }
})

db.Employee.update({
    _id: 1
}, {
    $unset: {
        Sex: "Male"
    }
})

db.Employee.find().pretty()
db.Department.find().pretty()

db.Employee.find({
    Dept: {
        $gt: 1000,
        $lt: 1005
    }
}, {
    Name: true,
    Dept: true
})

db.Employee.find({
    Name: {
        $regex: "^A"
    }
})

db.Employee.find({
    Age: {
        $gt: 30
    }
})