class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Merhaba, benim adim ${this.name} ve ${this.age} yaşimdayim.`);
    }
  }
  
  const person1 = new Person("Ahmet", 30);
  person1.greet();  // Merhaba, benim adım Ahmet ve 30 yaşımdayım.