



// Verilmiş dəyişənləri müvafiq tiplərə çevirin və nəticəni yoxlayın
let numString = "42";
let boolString = "true";
let mixedArray = ["123", "456", "789"];
let nullValue = null;

// Tələb olunan çevirmələr:
// 1. numString -> number
// 2. boolString -> boolean
// 3. mixedArray elementlərini number tipinə çevirin
// 4. nullValue-nu boolean-a çevirin və nəticəni izah edin


// 1. numString -> number
let newStr = Number(numString)
console.log(newStr);

let newStr2 = parseInt(numString)
console.log(newStr2);


// 2. boolString -> boolean
let boolStr = Boolean(boolString)
console.log(boolStr);

let boolStr2 = !!boolString


// 3. mixedArray elementlərini number tipinə çevirin
let mixArr = mixedArray.map((item) => Number(item))
console.log(mixArr);


// 4. nullValue-nu boolean-a çevirin və nəticəni izah edin
let newValue = Boolean(nullValue)
console.log(newValue); // null falsy dəyərdir


//////////////////////////////////////////////////////////////////////


// Verilmiş dəyişənlərin tiplərini müəyyən edin
let sample1 = NaN;
let sample2 = [1, 2, 3];
let sample3 = "";
let sample4 = 0;
let sample5 = {name: "John"};

// Hər bir dəyişən üçün:
// 1. typeof operatorundan istifadə edin
// 2. instanceof ilə yoxlayın (array və obyektlər üçün)
// 3. Array.isArray() metodundan istifadə edin (array-lər üçün)

// 1. typeof operatorundan istifadə edin
console.log("sample1:" , typeof(sample1));
console.log("sample2:" , typeof(sample2));
console.log("sample3:" , typeof(sample3));
console.log("sample4:" , typeof(sample4));
console.log("sample5:" , typeof(sample5));


// 2. instanceof ilə yoxlayın (array və obyektlər üçün)
console.log(
    sample2 instanceof Array,
    sample5 instanceof Object,
);


// 3. Array.isArray() metodundan istifadə edin (array-lər üçün)
console.log(
    Array.isArray(sample2)
);



////////////////////////////////////////////////////////////////////////////////


// Tələb olunan əməliyyatlar:
// 1. Mətndəki boşluqları silin
// 2. Mətni böyük hərflərə çevirin
// 3. "is" sözünü "was" ilə əvəz edin
// 4. Mətni sözlərə ayırın və array kimi saxlayın
// 5. Mətnin uzunluğunu tapın

let text = "   JavaScript is awesome   ";

// 1,2,3,4,5
let textReplace = text.replace("is","was")
let textReplaceSon = textReplace.trim().toUpperCase().split("")
let textLength = textReplaceSon.length

console.log(
    textReplaceSon,
    textLength
);


///////////////////////////////////////////////////////////////////////////////////


// Verilmiş məlumatlardan istifadə edərək şablon yaradın
let user = {
    firstName: "ALi",
    lastName: "Memedov",
    age: 35,
    email: "alice@example.com",
  };

// Template literal-dan istifadə edərək:
// 1. "Hörmətli {tam_ad}, sizin {yaş} yaşınız var." formatında mətn yaradın
// 2. İstifadəçi haqqında məlumatları cədvəl formasında göstərin
// 3. Email ünvanını @ simvoluna görə ayırın

console.log(` Hormetli ${user.firstName} ${user.lastName},sizin ${user.age} yasiniz var `);
console.table(user)
console.log(user.email.split("@"));


////////////////////////////////////////////////////////////////////////////////////


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fruits = ["alma", "armud", "banan", "gilas", "üzüm"];

// Tələb olunan əməliyyatlar:
// 1. Cüt ədədləri filter() ilə tapın
// 2. Hər ədədin kubunu map() ilə hesablayın
// 3. Ədədlərin cəmini reduce() ilə tapın
// 4. Meyvələri əlifba sırası ilə düzün
// 5. Array-ə yeni elementlər əlavə edin və silin (push, pop, shift, unshift)

// 1. Cüt ədədləri filter() ilə tapın
let newNumber = numbers.filter((item)=> item%2==0)
    console.log(newNumber);


// 2. Hər ədədin kubunu map() ilə hesablayın
let newNumber2 = numbers.map((item) => item **3)
console.log(newNumber2);


// 3. Ədədlərin cəmini reduce() ilə tapın
let sumNumber = numbers.reduce((acc,curr) => acc+curr)
console.log(sumNumber);


// 4. Meyvələri əlifba sırası ilə düzün
let lineNumber = fruits.sort((a,b) => a-b)
console.log(fruits);


// 5. Array-ə yeni elementlər əlavə edin və silin (push, pop, shift, unshift)
fruits.unshift("yeni meyve")
fruits.pop()

/////////////////////////////////////////////////////////////////////////////////////////   


let students = [
    {id: 1, name: "Aygün", grades: [85, 90, 92]},
    {id: 2, name: "Elçin", grades: [75, 85, 88]},
    {id: 3, name: "Nigar", grades: [95, 88, 91]},
    {id: 4, name: "Orxan", grades: [70, 65, 72]}
];

// Tələb olunan əməliyyatlar:
// 1. Hər tələbənin orta qiymətini hesablayın
// 2. 85-dən yuxarı orta qiyməti olan tələbələri tapın
// 3. Tələbələri orta qiymətə görə çoxdan aza düzün
// 4. Bütün tələbələrin ümumi orta qiymətini tapın


const ort = students.map((students) => ({
    id: students.id,
    name: students.name,
    ortQiy:
      students.grades.reduce((acc, cur) => acc + cur, 0) /
      students.grades.length,
  }))

  console.log({
    ortQiy: ort,
    ort85: ort.filter((st) => st.ortQiy > 85),
    sortDes: ort.sort((a, b) => b.ortQiy - a.ortQiy),
    allOrt: ort.reduce((acc, st) => acc + st.ortQiy , 0) / ort.length
  });


  ///////////////////////////////////////////////////////////////////////////////


// Aşağıdakı funksiyaları yazın:
// 1. Adi funksiya - faktorial hesablayan
function calculateFactorial(n) {
    // Kodunuzu buraya yazın
}

// 2. Arrow function - ədədin kvadratını qaytaran
const square = // Kodunuzu buraya yazın

// 3. Higher-order function - array-i filter edən funksiya qəbul edən və tətbiq edən
function filterArray(arr, filterFn) {
    // Kodunuzu buraya yazın
}
