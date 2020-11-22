class Person{
    constructor(name) {
        this.name = name;
        this.planet = "Земя";
    }
    
    talk(){
        console.log(`Hello ${this.name} from planet ${this.planet}`);
    }
}
const p  = new Person("Чък Норис");
p.talk();