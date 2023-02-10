function newUser(name, age, country) {
    var name = name || 'Jose';
    var age = age || 10;
    var country = country || 'Mexico';

    console.log(name, age, country);
}

newUser();
newUser('Luis', 11, 'MX');

function newAdmin(name = 'admin', age = 20, country = 'US') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('admin2', 21, 'UK');