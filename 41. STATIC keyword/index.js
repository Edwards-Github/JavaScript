/**
 * static = keyword that defines properties or methods that belong
 *          to a class itself rather than the objects created
 *          from that class (class owns anything static, not the objects)
 */

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

    static getArea(radius){
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User{
    // keep track of how many users we create
    static userCount = 0;

    constructor(username){
        this.username = username;
        // increment the userCount since it's class based
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }

    // static makes it so it's a class function
    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();

// function can only be used by class not object
User.getUserCount();