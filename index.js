class Person{
    constructor(first_name, last_name ,address) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.officeAddress=address;
    }
}

const p_one = new Person('Rajneesh', 'Kumar','Mumbai, Maharashtra');
const p_two = new Person('Anand', 'yadav','Patna, Bihar');
const p_three = new Person('Sonam', 'Kumari','Gaya, Bihar');

console.log(p_one);
console.log(p_one.firstName);
console.log(p_one.lastName);
console.log(p_one.officeAddress);

console.log(p_two);
console.log(p_three);