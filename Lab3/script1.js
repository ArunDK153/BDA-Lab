db.createCollection('Student')

db.Student.insertMany([{
        RollNo: 1,
        Name: "Adarsh",
        Age: 21,
        ContactNo: 9987135426,
        EmailID: "adarsh@mail.com"
    },
    {
        RollNo: 2,
        Name: "Kavita",
        Age: 20,
        ContactNo: 9196575875,
        EmailID: "kavita@mail.com"
    },
    {
        RollNo: 5,
        Name: "Pannaga",
        Age: 19,
        ContactNo: 8479135535,
        EmailID: "pannaga@mail.com"
    },
    {
        RollNo: 10,
        Name: "BFD",
        Age: 20,
        ContactNo: 7953447547,
        EmailID: "bfd@mail.com"
    },
    {
        RollNo: 11,
        Name: "ABC",
        Age: 21,
        ContactNo: 6895417144,
        EmailID: "abc@mail.com"
    },
])

db.Student.update({
    RollNo: 10
}, {
    $set: {
        EmailID: "dbe@mail.com"
    }
})

db.Student.update({
    RollNo: 11
}, {
    $set: {
        Name: "FEM"
    }
})

// mongoexport - d College - c Student - f RollNo, Name, Age, ContactNo, EmailID--type csv - o students.csv

db.Student.drop()

// mongoimport - d College - c Student--type csv--file students.csv--headerline