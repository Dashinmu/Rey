function Space(str){
    console.log("<--------" + str + "-------->");
}


Space("Task1");
let T1_num = 123;
 alert(T1_num);   /*console.log(T1_num); */

Space("Task2");
let T2_Java = "Java";
let T2_Script = "Script";
console.log(T2_Java + T2_Script);

Space("Task3");
let T3_FirstName = "Dashinmu";
console.log("Hello, " + T3_FirstName + "!");

Space("Task4");
let T4_Line = "Dashinmu";
console.log(T4_Line + "    " + T4_Line.length);

Space("Task5");
let T5_Str = "a b c";
for (let i = 0; i < T5_Str.length; i++){
    if (T5_Str[i] != " ") {
        console.log(T5_Str[i]);
    }
}

Space("Task6");
let T6_R = 5;
let T6_S = T6_R * T6_R * 3.14;
console.log("Radius = " + T6_R + "     S = " + T6_S);

Space("Task7");
let T7_A = "5px";
let T7_B = "6px";
let T7_C = parseInt(T7_A) + parseInt(T7_B) + "px";
console.log(T7_A + " + " + T7_B + " = " + T7_C);

Space("Task8");
let T8_A = "5.5px";
let T8_B = "6.5px";
let T8_C = parseFloat(T8_A) + parseFloat(T8_B) + "px";
console.log(T8_A + " + " + T8_B + " = " + T8_C);

Space("Task9");
let T9_A = /* prompt("Задайте сторону квадрата", ""); */ 10;
let T9_S = T9_A * T9_A;
console.log(T9_S);

Space("Task10");
let T10_A = String(999);
let T10_B = String(1240);
console.log(T10_A.length + T10_B.length);

Space("Task11");
let T11_Str = "abcde";
for (let i = 0; i < T11_Str.length; i++){
    console.log(T11_Str[i]);
}

Space("Task12");
let T12_Str = "abcde";
let T12_StrInv = "";
for (let i = T12_Str.length - 1; i >= 0; i--){
    T12_StrInv = T12_StrInv + T12_Str[i];
}
console.log(T12_StrInv);

Space("Task13");
let T13_Str = "abcde";
let T13_Num = 2;
console.log(T13_Str[T13_Num]);

Space("Task14");
let T14_Str = /* prompt("Введите строку:", ""); */ "abcde";
console.log(T14_Str[T14_Str.length - 1]);

Space("Task15");
let T15_A = /* Number(prompt("Введите сторону A:", "")); */ 10;
let T15_B = /* Number(prompt("Введите сторону B:", "")); */ 2;
console.log(T15_A + T15_B + T15_A + T15_B);

Space("Task16");
let T16_array = [1, 2, 3, 4, 5];
for (let i = 0; i < T16_array.length; i++){
    T16_array[i] = T16_array[i] + 3;
}
console.log(T16_array);

Space("Task17");
let T17_array = ["a", "b", "c"];
for (let i = 0; i < T17_array.length; i++){
    T17_array[i] = Number(i + 1); 
}
console.log(T17_array);

Space("Task18");
let T18_ArrChar = ["a", "b", "c"];
let T18_ArrNum = [1, 2, 3];
let T18_Result = T18_ArrChar.concat(T18_ArrNum);
console.log(T18_Result);

Space("Task19");
let T19_ArrChar = ["a", "b", "c"];
let T19_ArrNum = [1, 2, 3];
for (let i = 0; i < T19_ArrNum.length; i++){
    T19_ArrChar.push(T19_ArrNum[i]);
}
console.log(T19_ArrChar);

Space("Task20");
let T20_array = [1, 2, 3];
T20_array.reverse();
console.log(T20_array);


Space("Task21");
let T21_array = [1, 2, 3];
for (let i = 4; i < 7; i++){
    T21_array.push(i);
}
console.log(T21_array);

Space("Task22");
let T22_array = [1, 2, 3];
for (let i = 4; i < 7; i++){
    T22_array.unshift(i);
}
console.log(T22_array);

Space("Task23");
let T23_array = ["js", "css", "jq"];
console.log(T23_array.shift());

Space("Task24");
let T24_array = ["js", "css", "jq"];
console.log(T24_array.pop());

Space("Task25");
let T25_ArrF = [1, 2, 3, 4, 5];
let T25_ArrS = T25_ArrF.slice(3);
console.log(T25_ArrS);

Space("Task26");
let T26_array = [1, 2, 3, 4, 5];
T26_array.splice(1, 2);
console.log(T26_array);

Space("Task27");
let T27_ArrF = [1, 2, 3, 4, 5];
let T27_ArrS = T27_ArrF.splice(1, 3);
console.log(T27_ArrS);

Space("Task28");
let T28_array = [1, 2, 3, 4, 5];
T28_array.splice(1, 0, "a", "b");
T28_array.splice(6, 0, "c");
T28_array.splice(8, 0, "e");
console.log(T28_array);

Space("Task29");
let T29_array = [3, 4, 1, 2, 7];
T29_array.sort();
console.log(T29_array);

Space("Task30");
let T30_array = {
    'ru': ["голубой", "красный", "зелёный"],
    'en': ["blue", "red", "green"],
};
console.log(T30_array.ru[0]);

Space("Task31");
let T31_user = {
    FirstName: "Daniil",
    SecondName: "Dashinmu",
    ThirdName: "Niiru"
};
console.log(T31_user.SecondName + "  " + T31_user.FirstName + "   " + T31_user.ThirdName);

Space("Task32");
let T32_date = {
    year: 2021,
    month: 11,
    day: 8,
};
console.log(T32_date.year + "." + T32_date.month + "." + T32_date.day);

Space("Task33");
let T33_array = [ [1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(T33_array[1][0]);

Space("Task34");
let T34_obj = {
    js: ["jQuery", "Angular"],
    php: "hello",
    css: "world",
};
console.log(T34_obj.php);

Space("Task35");
let T35_array = {
    ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
console.log(T35_array.ru[0] + " " + T35_array.en[2]);

Space("Task36");
let T36_array = {
    ru: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    en: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
};
let T36_Day = 3;
let T36_Lang = "ru";
if (T36_Lang == "ru") {
    console.log(T36_array.ru[T36_Day-1]);
} else {
    console.log(T36_array.en[T36_Day-1]);
}

Space("Task37");
let T37_array = {
    js : "test",
    jq: "hello",
    css: "world",
};
console.log(Object.keys(T37_array));

Space("Task38");
let T38_A = "test1";
let T38_B = "test2";
if (T38_A > T38_B){
    console.log(T38_A);
} else if (T38_A < T38_B){
    console.log(T38_B);
} else {
    console.log("equal");
}

Space("Task39");
let T39_num = 3;
if (T39_num > 0 && T39_num < 5){
    console.log("True");
} else {
    console.log("False");
}

Space("Tasak40");
let T40_Num1 = 1;
let T40_Num2 = 4;
if (T40_Num1 <= 1 && T40_Num2 >= 3){
    console.log("True");
} else {
    console.log("False");
}

Space("Task41");
let T41_num = 25;
let T41_Str = String(T41_num);
let T41_Sum = 0;
if (T41_num > 10 && T41_num < 99) {
    for (let i = 0; i < T41_Str.length; i++) {
        T41_Sum += Number(T41_Str[i]);
    }
}
if (T41_Sum < 10) {
    console.log("X - тип");
} else console.log("XX - тип");

Space("Task42");
let T42_adult = true;
let T42_age = 17;
if (T42_age < 18) {
    T42_adult = false;
}
console.log(T42_adult);

Space("Task43");
let T43_num = 5660;
let T43_NumToStr = String(T43_num);
let T43_Last = T43_NumToStr.length;
if (T43_NumToStr[T43_Last-1] == 0) {
    console.log("True");
} else {
    console.log("False");
}

Space("Task44");
let T44_Month = 7;
switch (T44_Month) {
    case 1: console.log("Winter");
        break;
    case 2: console.log("Winter");
        break;
    case 3: console.log("Spring");
        break;
    case 4: console.log("Spring");
        break;
    case 5: console.log("Spring");
        break;
    case 6: console.log("Summer");
        break;
    case 7: console.log("Summer");
        break;
    case 8: console.log("Summer");
        break;
    case 9: console.log("Autumn");
        break;
    case 10: console.log("Autumn");
        break;
    case 11: console.log("Autumn");
        break;
    case 12: console.log("Winter");
        break;
}

Space("Task45");
let T45_num = 3;
switch (T45_num) {
    case 1: console.log("Winter");
        break;
    case 2: console.log("Spring");
        break;
    case 3: console.log("Summer");
        break;
    case 4: console.log("Autumn");
        break;
}

Space("Task46");
let T46_array = [2];
for (let i = 4; i < 100; i+=2){
    T46_array.push(i);
}
console.log(T46_array);

Space("Task47");
let T47_S = 1;
for (let i = 1; i < 21; i++) {
    T47_S *= i;
}
console.log(T47_S);

Space("Tasak48");
let T48_Sum = 0;
for (let i = 2; i < 100; i+=2){
    T48_Sum += i;
}
console.log(T48_Sum);

Space("Task49");
let T49_array = [1, 2, 3, 4, 5];
for (let i = 0; i < T49_array.length; i++) {
    if (T49_array[i]%2 != 0) {
        console.log(T49_array[i]);
    }
}

Space("Task50");
let T50_array = [1, 2, 3, 4, 5];
for (let i = 0; i < T50_array.length; i++) {
    T50_array[i] *= T50_array[i];
}
console.log(T50_array);

Space("Task51");
let T51_array = [10, 20, 30, 50, 235, 3000];
let T51_NumToStr;
for (let i = 0; i < T51_array.length; i++){
    T51_NumToStr = String(T51_array[i]);
    if (T51_NumToStr[0] == 1 || T51_NumToStr[0] == 2 || T51_NumToStr[0] == 5) {
        console.log(T51_array[i]);
    }
}

Space("Task52");
let T52_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let T52_day = "Thursday";
for (let i = 0; i < T52_week.length; i++) {
    if (T52_week[i] == T52_day) {
        console.log(T52_week[i].toLocaleUpperCase());
    } else {
        console.log(T52_week[i]);
    }
}