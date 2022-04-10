 const element = document.querySelector("#DivTasks");

function task1() {
    element.innerHTML = `
        <button class = "button">Button</button>
    `;
    button = document.querySelector(".button");
    button.addEventListener("click", function() {
        alert("Clicked on button");
    })
}

function task2() {
    element.innerHTML = `
    <button class = "button">Button</button>
`;
    button = document.querySelector(".button");
    button.addEventListener("mouseover", function() {
        alert("Mouse over button");
    })
}

function task3_edit() {
    element.innerHTML = `
    <button class = "button">Button</button>
`;
    button = document.querySelector(".button");
    button.addEventListener("mouseout", function() {
        alert("Mouse out button");
    })
}

function task4() {
    element.innerHTML = `
        <input id = "button1" type = "submit" value = "Button1">
        <input id = "button2" type = "submit" value = "Button2">
    `;
    button1 = document.querySelector("#button1");
    button2 = document.querySelector("#button2");
    button1.addEventListener("click", function() {
        alert(1);
    });
    button2.addEventListener("click", function() {
        alert(2);
    });
}

function task5() {
    element.innerHTML = `
        <input id = "number1" type = "text" value = 1>
        <input id = "number2" type = "text" value = 2>
        <button class = "button">Calculate</button>
    `;
    button = document.querySelector(".button");
    button.addEventListener("click", function() {
        number1 = Number(document.querySelector("#number1").value);
        number2 = Number(document.querySelector("#number2").value);
        result = number1 + number2;
        alert(result);
    });
}

function task6() {
    element.innerHTML = `
        <p id = "prgph1">Paragraph1</p> 
        <p id = "prgph2">Paragraph2</p>
        <button id = "btn1">Button 1</button>
        <button id = "btn2">Button 2</button> 
    `;
    btn1 = document.querySelector("#btn1");
    btn2 = document.querySelector("#btn2");
    prgph1 = document.querySelector("#prgph1").textContent;
    prgph2 = document.querySelector("#prgph2").textContent;
    btn1.addEventListener("click", function() {
        alert(prgph1);
    });
    btn2.addEventListener("click", function() {
        alert(prgph2);
    });
}

function task7() {
    element.innerHTML = `
        <p id = "prgph">Text</p>
        <button id = "hello">Hello</button>
        <button id = "bye">Bye</button>
    `;
    prgph = document.querySelector("#prgph");
    hello = document.querySelector("#hello");
    bye = document.querySelector("#bye");
    hello.addEventListener("click", function() {
        prgph.innerHTML = "Hello";
    });
    bye.addEventListener("click", function() {
        prgph.innerHTML = "Bye";
    });
}

function task8() {
    element.innerHTML = `
        <p id = "prgph1">First</p>
        <p id = "prgh2">Second</p>
        <p id = "prgh3">Third</p>
        <button id = "btn1">Button 1</button>
        <button id = "btn2">Button 2</button>
        <button id = "btn3">Button 3</button>
    `;
    p1 = document.querySelector("#prgh1");
    p2 =  document.querySelector("#prgh2");
    p3 = document.querySelector("#prgh3");
    btn1 = document.querySelector("#btn1");
    btn1.addEventListener("click", function() {
        p1.innerHTML = "1";
    });
    btn2 = document.querySelector("#btn2");
    btn2.addEventListener("click", function() {
        p2.innerHTML = "2";
    });
    btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", function() {
        p3.innerHTML = "3";
    });
}

function task9() {
    element.innerHTML = `
        <p id = "number">4</p>
        <button id = "button">Power</button>
    `;
    btn = document.querySelector("#button");
    number = document.querySelector("#number");
    btn.addEventListener("click", function() {
        let x = Number(number.textContent);
        x = x * x;
        number.innerHTML = x;
    });
}

function task10() {
    element.innerHTML = `
        <p id = "text">Text?</p>
        <button id = "button">Push "!"</button>
    `;
    btn = document.querySelector("#button");
    btn.addEventListener("click", function() {
        txt = document.querySelector("#text").textContent;
        txt += "!";
        document.querySelector("#text").innerHTML = txt;
    });
}

function task11() {
    element.innerHTML = `
        <p id = "text">Text?</p>
        <button id = "button">Unshift "!"</button>
    `;
    btn = document.querySelector("#button");
    btn.addEventListener("click", function() {
        txt = "!" + document.querySelector("#text").textContent;
        document.querySelector("#text").innerHTML = txt;
    });
}

function task12() {
    element.innerHTML = `
        <p id = "text">Whatever</p>
        <button id = "button">Overwrite</button>
    `;
    btn = document.querySelector("#button");
    btn.addEventListener("click", function() {
        document.querySelector("#text").innerHTML = "<i>hello</i>";
    });
}

function task13() {
    element.innerHTML = `
        <input id = "email" type="email">
        <button id = "button">Alert</button>
    `;
    btn = document.querySelector("#button");
    btn.addEventListener("click", function() {
        email = document.querySelector("#email").value;
        alert(email);
    });
}

function task14() {
    element.innerHTML = `
        <input id = "email" type="email">
        <button id = "button">dashinmu@gmail.com</button>
    `;
    btn = document.querySelector("#button");
    btn.addEventListener("click", function() {
        document.querySelector("#email").value = btn.textContent;
    });
}

function task15() {
    element.innerHTML = `
        <a id = "link" href = "script.js">link</a>
        <p id = "text">Text</p>
        <button id = "button">Return</button>
    `;
    btn = document.querySelector("#button");
    btn.addEventListener("click", function() {
        document.querySelector("#text").innerHTML = document.querySelector("#link").href;    });
}

function task16() {
    element.innerHTML = `
        <img id = "image" src = "3.png">
        <p id = "text">Text</p>
        <button id = "button">Return</button>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        document.querySelector("#text").innerHTML = document.querySelector("#image").src;
    });
}

function task17() {
    element.innerHTML = `
        <img id = "image" class = "Image" src = "">
        <input id = "input1" type = "src">
        <input id = "input2" type = "src">
        <button id = "button1">Overwrite src1</button>
        <button id = "button2">Overwrite src2</button>
    `;
    image = document.querySelector("#image");
    document.querySelector("#button1").addEventListener("click", function() {
        image.src = document.querySelector("#input1").value;
    });
    document.querySelector("#button2").addEventListener("click", function() {
        image.src = document.querySelector("#input2").value;
    });
}

function task18() {
    element.innerHTML = `
        <input id = "input1" type = "number">
        <input id = "input2" type = "number">
        <input id = "input3" type = "number">
        <input id = "input4" type = "number">
        <input id = "input5" type = "number">
        <p id = "text">Text</p>
        <button id = "button">Average</button>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let x = Number(document.querySelector("#input1").value);
        x += Number(document.querySelector("#input2").value);
        x += Number(document.querySelector("#input3").value);
        x += Number(document.querySelector("#input4").value);
        x += Number(document.querySelector("#input5").value);
        x = x / 5;
        document.querySelector("#text").innerHTML = x;
    });
}

function task19() {
    element.innerHTML = `
        <input id = "input" type = "text" value = "text">
    `;
    document.querySelector("#input").addEventListener("mouseover", function() {
        document.querySelector("#input").value = "";
    });
}

function task20() {
    element.innerHTML = `
        <input id = "button" type = "submit" value = 0>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let val = document.querySelector("#button").value;
        if (val < 10) {
            document.querySelector("#button").value++;
        }
    });
}

function task21() {
    element.innerHTML = `
        <input id = "input" type = "number" value = 13>
        <button id = "button">Check</button>
    `;
    let x = document.querySelector("#input").value;
    document.querySelector("#button").addEventListener("click", function() {
        let y = document.querySelector("#input").value;
        if (x != y) {
            alert("Число изменено");
        } else {
            alert("Число не изменено");
        }
    });
}

function task22() {
    element.innerHTML = `
        <input id = "input" type = "number" value = 13>
        <button id = "button">Return</button>
    `;
    let x = document.querySelector("#input").value;
    document.querySelector("#button").addEventListener("click", function() {
        document.querySelector("#input").value = x;
    });
}

function task23() {
    element.innerHTML = `
         <button id = "button" class = "www">Button</button>
    `;
    classbtn = document.querySelector("#button").classList.value;
    document.querySelector("#button").addEventListener("click", function() {
        if (classbtn == "www") {
            document.querySelector("#button").classList.remove("www");
        } else {
            document.querySelector("#button").classList.add("www");
        }
    });
}

function task24() {
    element.innerHTML = `
        <div id = "MutableDiv">
            <button id = "button">Change Div</button>
        </div>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        document.querySelector("#MutableDiv").classList.toggle("ChangeStyleDiv");
    });
}

function task25() {
    element.innerHTML = `
        <div id = "MutableDiv">
            Text into Div
            <button id = "button">Change style font</button>
        </div>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        document.querySelector("#MutableDiv").classList.toggle("ChangeStyleDiv");
    });
}

function task26() {
    element.innerHTML = `
        <div class = "HiddenDiv">
           Secret Text into Div
        </div>
        <button id = "button">Active Element</button>
        <div>
            <ul>
                <li>text</li>
                <li>text</li>
                <li id="elem">text</li>
                <li>text</li>
                <li>text</li>
            </ul>
        </div>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        document.querySelector(".HiddenDiv").classList.toggle("active");
    });
    document.querySelector("#elem").parentElement.style.border = "1px solid red";
}

function task27() {
    element.innerHTML = `
        <header>
            <div>
                <p>
                    <span id="elem"></span>
                </p>
            </div>
        </header>     
    `;
    document.querySelector("#elem").closest("div").style.border = "1px solid red";
}

function task28() {
    element.innerHTML = `
        <div>
            <ul>
                <li class = "List">text1</li>
                <li  class = "List">text2</li>
                <li id ="elem"  class = "List">text3</li>
                <li  class = "List">text4</li>
                <li  class = "List">text5</li>
            </ul>            
            <button id = "button">Change position</button>
        </div>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        arr = Array.from(document.querySelectorAll(".List"));
        let elemID = 0;
        for (let i = 0; i < arr.length; i++){
            if (arr[i].id == "elem") {
                elemID = i;
            }
        }
        val = arr[elemID - 1].innerHTML;
        arr[elemID - 1].innerHTML = arr[elemID + 1].innerHTML;
        arr[elemID + 1].innerHTML = val;
    });
}

function task29() {
    element.innerHTML = `
        <div id = "parent">
            <p class = "www">text</p>
            <p class = "www">text</p>
            <p class = "www">text</p>
            <p class = "ggg">text</p>
            <p class = "ggg">text</p>
            <p class = "ggg">text</p>
        </div>
    `;
    www = document.querySelector("#parent").querySelectorAll(".www");
    console.log(www);
    ggg = document.querySelector("#parent").querySelectorAll(".ggg");
    console.log(ggg);
}

function task30() {
    element.innerHTML = `
        <div data-num = "1" class = "t30">text</div>
        <div data-num = "2" class = "t30">text</div>
        <div data-num = "3" class = "t30">text</div>
        <div data-num = "4" class = "t30">text</div>
        <div data-num = "5" class = "t30">text</div>
    `;
    divs = document.querySelectorAll(".t30");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
            num = divs[i].dataset.num;
            divs[i].textContent = divs[i].textContent + num;
        });
    }
}

function task31() {
    element.innerHTML = `
        <input id = "button" type = "submit" value = 0>
    `;
    btn = document.querySelector("#button");
    btn.addEventListener("click", function() {
        btn.value++;
    });
    btn.addEventListener("dblclick", function() {
        alert(btn.value);
        btn.value = 0;
    });
}

function task32() {
    element.innerHTML = `
        <input id = "FIOin" type = "text">
        <input id = "Fin" type = "text">
        <input id = "Iin" type = "text">
        <input id = "Oin" type = "text">
    `;
    document.querySelector("#FIOin").addEventListener("focusout", function() {
        arr = document.querySelector("#FIOin").value.split(" ");
        document.querySelector("#Fin").value = arr[0];
        document.querySelector("#Iin").value = arr[1];
        document.querySelector("#Oin").value = arr[2];
    });
}

function task33() {
    element.innerHTML = `
        <input id = "input" type = "text">
    `;
    document.querySelector("#input").addEventListener("focusout", function() {
        arr = document.querySelector("#input").value.split(" ");
        arr[0] = arr[0][0].toLocaleUpperCase() + arr[0].slice(1);
        arr[1] = arr[2][0].toLocaleUpperCase() + arr[1].slice(1);
        arr[2] = arr[2][0].toLocaleUpperCase() + arr[2].slice(1);
        document.querySelector("#input").value = arr[0] + " " + arr[1] + " " + arr[2];
    });
}

function task34() {
    element.innerHTML = `
        <input id = "number" type = "number" value = 1>
        <button id = "plus">+1</button>
        <button id = "minus">-1</button>
    `;
    document.querySelector("#plus").addEventListener("click", function() {
        document.querySelector("#number").value++;
    });
    document.querySelector("#minus").addEventListener("click", function() {
        if (document.querySelector("#number").value != 1) {
            document.querySelector("#number").value--;
        }
    });
}

function task35() {
    element.innerHTML = `
        <input id = "number" type = "number" value = 0>
        <p id = "prgh"></p>
        <button id = "button">click</button>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let result = 1;
        number = Number(document.querySelector("#number").value);
        if (number == 0) {
            document.querySelector("#prgh").innerHTML = 1;
        } else if (number < 0) {
            document.querySelector("#prgh").innerHTML = "Факториал из отрицательного числа? У тебя шиза"
        } else {
            for (let i = 1; i <= number; i++) {
                result *= i;
            }
            document.querySelector("#prgh").innerHTML = result;
        }
    });
}

function task36() {
    element.innerHTML = `
        <input id = "input" type = "text">
        <button id = "block">Block</button>
        <button id = "unblock">Unblock</button>
    `;
    document.querySelector("#block").addEventListener("click", function() {
        document.querySelector("#input").setAttribute("disabled", true);
    });
    document.querySelector("#unblock").addEventListener("click", function() {
        document.querySelector("#input").removeAttribute("disabled", true);
    });
}

function task37() {
    element.innerHTML = `
        <input id = "check" type = "checkbox" disabled = "true">
        <input id = "button-on" type = "submit" value = "on">
        <input id = "button-off" type = "submit" value = "off">
    `;
    document.querySelector("#button-on").addEventListener("click", function() {
        document.querySelector("#check").setAttribute("checked", true);
    });
    document.querySelector("#button-off").addEventListener("click", function() {
        document.querySelector("#check").removesAttribute("checked", true);
    });
}

function task38() {
    element.innerHTML = `
        <input type = "radio" id = "radio1" value = 1>
        <input type = "radio" id = "radio2" value = 2>
        <input type = "radio" id = "radio3" value = 3>
        <input id = "button" type = "submit" value = "button">
        <p id = "prgph">text</p>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        if (document.querySelector("#radio1").checked ) {
            document.querySelector("#prgph").textContent = document.querySelector("#radio1").value;
        }
        if (document.querySelector("#radio2").checked == true) {
            document.querySelector("#prgph").textContent = document.querySelector("#radio2").value;
        }
        if (document.querySelector("#radio3").checked == true) {
            document.querySelector("#prgph").textContent = document.querySelector("#radio3").value;
        }
    });
}

function task39() {
    element.innerHTML = `
        <input id = "input" type = "text" value = "index">
    `;
    document.querySelector("#input").addEventListener("change", function() {
        if (document.querySelector("#input").value.length < 5) {
            document.querySelector("#input").style.border = "2px solid green";
        } else {
            document.querySelector("#input").style.border = "2px solid red";
        }
    });
}

function task40() {
    element.innerHTML = `
        <input id = "input" type = "text">
        <p id = "pg"></p>
    `;
    input = document.querySelector("#input");
    input.addEventListener("input", function() {
        if (input.value.length <= 5) {
            document.querySelector("#pg").innerHTML = Number(5 - input.value.length) + "    left";
        } else {
            document.querySelector("#pg").innerHTML = Number(input.value.length - 5) + "    extra";
        }
    });
}

function task41() {
    element.innerHTML = `
        <select id = "select" name = "years" size = 11>
            <option> Choose year -> </option>
            <option value = 0> 2020 </option>
            <option value = 1> 2021 </option>
            <option value = 2> 2022 </option>
            <option value = 3> 2023 </option>
            <option value = 4> 2024 </option>
            <option value = 5> 2025 </option>
            <option value = 6> 2026 </option>
            <option value = 7> 2027 </option>
            <option value = 8> 2028 </option>
            <option value = 9> 2029 </option>
            <option value = 10> 2030 </option>
        </select>
    `;
    selected = document.querySelector("#select");
    selected.addEventListener("change", function() {
        if (Number(selected.value) % 4 == 0) {
            alert("It's a Leap Year");
        } else {
            alert("It isn't a Leap Year");
        }
    });
}

function task42() {
    element.innerHTML = `
        <select id = "select" name = "week" size = 8>
            <option value = 0> Choose day -> </option>
            <option value = 1> Monday </option>
            <option value = 2> Tuesday </option>
            <option value = 3> Wednesday </option>
            <option value = 4> Thursday </option>
            <option value = 5> Friday </option>
            <option value = 6> Saturday </option>
            <option value = 7> Sunday </option>
        </select>
    `;
    selected = document.querySelector("#select");
    selected.addEventListener("change", function() {
        if (Number(selected.value) < 6) {
            alert("It's working day")
        } else {
            alert("It's day off")
        }
    });
}

function task43() {
    element.innerHTML = `
        <select id = "select" name = "months" size = 13>
            <option value = 0> Choose months -> </option>
            <option value = 1> January </option>
            <option value = 2> February </option>
            <option value = 3> March </option>
            <option value = 4> April </option>
            <option value = 5> May </option>
            <option value = 6> June </option>
            <option value = 7> July </option>
            <option value = 8> August </option>
            <option value = 9> September </option>
            <option value = 10> October </option>
            <option value = 11> November </option>
            <option value = 12> December </option>
        </select>
    `;
    let currentDate = new Date().getMonth() + 1;
    document.querySelectorAll("#select option")[currentDate].setAttribute("Selected", true);
}

function task44() {
    element.innerHTML = `
        <select id = "select" size = 5>
            <option> ------ </option>
        </select>
        <input id = "input" type = "text">
        <input id = "button" type = "submit" value = "button">
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let option = document.createElement("option");
        option.text = document.querySelector("#input").value;
        document.querySelector("#select").add(option);
    });
}

function task45() {
    element.innerHTML = `
        <div id = "coordinate">0 : 0</div>
    `;
    x = document.querySelector("#coordinate");
    window.addEventListener("mousemove", function(MouseEvent) {
        x.innerHTML = MouseEvent.pageX + " : " + MouseEvent.pageY;
    });
}

function task46() {
    element.innerHTML = `
        <button id = "elem">text</button>
    `;
    document.querySelector("#elem").addEventListener("click", func);
    document.querySelector("#elem").addEventListener("dblclick", func);
    function func() {
        if (event.type == "click") {
            document.querySelector("#elem").style.background = "green";
        } else {
            document.querySelector("#elem").style.background = "red";
        }
    }
}

function task47() {
    element.innerHTML = `
        <style>
            ul {
                padding: 30px;
                border: 1px solid orangered;
            }
            li {
                list-style-type: none;
                margin-bottom: 20px;
                border: 1px dashed gray;
            }
        </style>
        <ul id="elem">
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
        </ul>
    `;
    document.querySelector("#elem").addEventListener("click", function(event) {
        if (event.target.tagName == "LI") {
            event.target.textContent = event.target.textContent + "!";
        }
        if (event.target.tagName == "UL") {
            let li_el = document.createElement("li");
            li_el.appendChild(document.createTextNode("text"));
            event.target.appendChild(li_el);
        }
    });
}

function task48() {
    element.innerHTML = `
        <input id = "input" type = "text">
        <p id = "pg">-------</p>
    `;
    document.querySelector("#input").addEventListener("keydown", function(event) {
        if (event.key == "Enter") {
            document.querySelector("#pg").textContent = document.querySelector("#pg").textContent + "   " + document.querySelector("#input").value;
            document.querySelector("#input").value = "";
        }
    });
}

function task49() {
    element.innerHTML = `
        <button id = "button">button</button>
    `;
    document.addEventListener("keydown", function(event) {
        if (event.key == "Alt") {
            document.querySelector("#button").addEventListener("click", function() {
                document.querySelector("#button").style.background = "red";
            });
        }
    });
}

function task50() {
    element.innerHTML = `
        <ul id = "elem">
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
            <li>text</li>
        </ul>
    `;
    document.querySelector("#elem").addEventListener("click", function(event) {
        if (event.ctrlKey) {
            event.target.textContent = event.target.textContent + "1";
        }
        if (event.shiftKey) {
            event.target.textContent = event.target.textContent + "2";
        }
    });
}

function task51() {
    element.innerHTML = `
    <a id = "link1" href = "https://povt19d.xenista.ru"> link </a>
    <a id = "link2" href = "https://twitter.com"> link </a>
    `;
    document.querySelector("#link1").addEventListener("click", function(event) {
        event.preventDefault()
        document.querySelector("#link1").textContent = document.querySelector("#link1").getAttribute("href");
    });
    document.querySelector("#link2").addEventListener("click", function(event) {
        event.preventDefault()
        document.querySelector("#link2").textContent = document.querySelector("#link2").getAttribute("href");
    });
}

function task52() {
    setInterval(function() {
        console.log("Whatever");
    }, 3000);
}

function task53() {
    let x = 10;
    console.log(x);
    let timer = setInterval(function() {
        x--;
        console.log(x);
        if (x == 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function task54() {
    element.innerHTML = `
        <input id = "input" type = "number" value = 10>
    `;
    let timer = setInterval(function() {
        document.querySelector("#input").value--;
    }, 1000);
}

function task55() {
    element.innerHTML = `
        <input id = "input" type = "number" value = 10>
    `;
    let timer = setInterval(function() {
        document.querySelector("#input").value--;
        if (document.querySelector("#input").value == 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function task56() {
    element.innerHTML = `
        <p id = "pg">0</p>
        <input id = "button" type = "submit" value = "start">
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let timer = setInterval(function() {
            document.querySelector("#pg").textContent++;
        }, 1000);
    });
}

function task57() {
    element.innerHTML = `
        <p id = "pg">10</p>
        <input id = "button" type = "submit" value = "start">
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let timer = setInterval(function() {
            if (Number(document.querySelector("#pg").textContent) > 0) {
                document.querySelector("#pg").textContent--;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    });
}

function task58() {
    element.innerHTML = `
        <input id = "input" type = "number" value = 2>
        <input id = "button" type = "submit" value = "calculate">
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let timer = setInterval(function() {
            document.querySelector("#input").value = Math.pow(Number(document.querySelector("#input").value), 2);
        }, 1000);
    });
}

function task59() {
    element.innerHTML = `
        <input id = "input" type = "number">
        <p id = "pg"></p>
    `;
    document.querySelector("#input").addEventListener("focusout", function() {
        let x = document.querySelector("#input").value;
        document.querySelector("#pg").textContent = x;
        let timer = setInterval(function() {
            if (x > 0) {
                x--;
                document.querySelector("#pg").textContent = x;
            } else {
                clearInterval(timer);
                document.querySelector("#pg").textContent = "";
            }
        }, 1000); 
    });
}

function task60() {
    element.innerHTML = `
        <input id = "input" type = "number">
        <input id = "button" type = "submit" value = "start">
        <p id = "pg"></p>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let x = document.querySelector("#input").value;
        document.querySelector("#pg").textContent = x;
        let timer = setInterval(function() {
            if (x > 0) {
                x--;
                document.querySelector("#pg").textContent = x;
            } else {
                clearInterval(timer);
            }
        }, 1000);
    });
}

function task61() {
    element.innerHTML = `
        <p id = "pg"></p>
        <input id = "start" type = "submit" value = "start">
        <input id = "stop" type = "submit" value = "stop">
    `;
    let x = 1;
    document.querySelector("#pg").textContent = x;
    document.querySelector("#start").addEventListener("click", function() {
        let timer = setInterval(function() {
            x++;
            document.querySelector("#pg").textContent = x;
        }, 1000);
        document.querySelector("#stop").addEventListener("click", function() {
            clearInterval(timer);
        });
    });
}

function task62() {
    let flag = 0;
    element.innerHTML = `
        <button id = "button">button</button>
    `;
    let timer = setInterval(function() {
        if (flag == 0) {
            document.querySelector("#button").style.background = "red";
            flag++;
        } else {
            document.querySelector("#button").style.background = "green";
            flag--;
        }
    }, 1000);
}

function task63() {
    element.innerHTML = `
        <p id = "pg"></p>
    `;
    let timer = setInterval(function() {
        currentDate = new Date();
        document.querySelector("#pg").textContent = currentDate.toLocaleTimeString();
    }, 1000);
}

function task63_setTimeout() {
    element.innerHTML = `
        <input id = "button" type = "submit" value = "start">
    `
    let x = 0;
    let timer = 0;
    document.querySelector("#button").addEventListener("click", timeOut);
    function timeOut() {
        console.log(x);
        x++;
        timer += 1000;
        window.setTimeout(timeOut, timer);
    }
}

function task64() {
    element.innerHTML = `
        <ol id = "elem"></ol>
        <button id = "button">button</button>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        elem = document.createElement("li");
        elem.appendChild(document.createTextNode("пункт"));
        document.querySelector("#elem").appendChild(elem);
    });
}

function task65() {
    element.innerHTML = `
        <ul id = "uwu"></ul>
    `;
    for (let i = 1; i < 11; i++) {
        elem = document.createElement("li");
        elem.appendChild(document.createTextNode(i));
        document.querySelector("#uwu").appendChild(elem);
    }
}

function task66() {
    element.innerHTML = `
        <div id = "parent"></div>
    `
    let arr = [1, 2, 3, 4, 5];
    /* for...of - забавная и полезная штука, я проверил поиграясь с ним немного) */
    for (let elem of arr) {
        let p = document.createElement("p");
        p.innerHTML = elem;
        document.querySelector("#parent").appendChild(p);
    }
    number = document.querySelectorAll("#parent p");
    for (let elem of arr) {
        number[elem - 1].addEventListener("click", function() {
            number[elem - 1].textContent++;
        });
    }
}

function task67() {
    element.innerHTML = `
        <ul id = "elem"></ul>
    `;
    let arr = ["- Привет", "- Как дела?", "- Как дела?", "- Хорошо", "- Пока", "- Пока"];
    for (let elem of arr) {
        li_el = document.createElement("li");
        li_el.appendChild(document.createTextNode(elem));
        document.querySelector("#elem").appendChild(li_el);
    }
}

function task68() {
    element.innerHTML = `
    <table id = "table"></table>
    `;
    for (let i = 0; i < 5; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode("x"));
            tr.appendChild(td);
        }
        document.querySelector("#table").appendChild(tr);
    }
}

function task68_2() {
    element.innerHTML = `
        <input id = "row" type = "number">
        <input id = "coloumn" type = "number">
        <input id = "button" type = "submit" value = "create">
        <table id = "table"></table>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let col = Number(document.querySelector("#coloumn").value);
        let row = Number(document.querySelector("#row").value);
        for (let i = 0; i < row; i++) {
            tr = document.createElement("tr");
            for (let j = 0; j < col; j++) {
                td = document.createElement("td");
                td.appendChild(document.createTextNode("x"));
                tr.appendChild(td);
            }
            document.querySelector("#table").appendChild(tr);
        }
    });
}

function task69() {
    element.innerHTML = `
        <table id ="table"></table>
    `;
    let cnt = 0;
    for (let i = 0; i < 5; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            cnt++;
            td = document.createElement("td");
            td.appendChild(document.createTextNode(cnt));
            tr.appendChild(td);
        }
        document.querySelector("#table").appendChild(tr);
    }
}

function task70() {
    element.innerHTML = `
        <table id = "table"></table>
    `;
    let num = 2;
    for (let i = 0; i < 5; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < 5; j++) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(num));
            tr.appendChild(td);
            num += 2;
        }
        document.querySelector("#table").appendChild(tr);
    }           
}

function task71() {
    element.innerHTML = `
        <table id = "table"></table>
    `;
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ];
    for (let i = 0; i < arr.length; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < arr[i].length; j++) {
            td = document.createElement("td");
            td.textContent = arr[i][j];
            ///* s */td.appendChild(document.createTextNode(arr[i][j]));
            tr.appendChild(td);
        }
        document.querySelector("#table").appendChild(tr);
    }
}

function task72() {
    element.innerHTML = `
        <table id = "table"></table>
    `;
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [10, 11, 12]
    ];
    for (let i = 0; i < arr.length; i++) {
        tr = document.createElement("tr");
        for (let j = 0; j < arr[i].length; j++) {
            td = document.createElement("td");
            td.appendChild(document.createTextNode(Math.pow(arr[i][j], 2)));
            tr.appendChild(td);
        }
        document.querySelector("#table").appendChild(tr);
    }
}

function task73() {
    element.innerHTML = `
    <table id = "table"></table>
    `;
    let employees = [
        { name: "employee1", age: 30, salary: 400 },
        { name: "employee2", age: 31, salary: 500 },
        { name: "employee3", age: 32, salary: 600 },
    ];
    /* Я вообще забыл как работать с классом и возвращать переменную атрибута, так что вот... */
    for (let i = 0; i < employees.length; i++) {
        tr = document.createElement("tr");

        td = document.createElement("td");
        td.classList.add("name");
        td.appendChild(document.createTextNode(employees[i].name));
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("age");
        td.appendChild(document.createTextNode(employees[i].age));
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("salary");
        td.appendChild(document.createTextNode(employees[i].salary));
        tr.appendChild(td);

        document.querySelector("#table").appendChild(tr);
    }
}

function task74() {
    element.innerHTML = `
        <table id = "table"></table>
    `;
    let employees = [
        { name: "employee1", age: 30, salary: 400 },
        { name: "employee2", age: 31, salary: 500 },
        { name: "employee3", age: 32, salary: 600 },
    ];
    for (let i = 0; i < employees.length; i++) {
        tr = document.createElement("tr");

        td = document.createElement("td");
        td.classList.add("name");
        td.appendChild(document.createTextNode(employees[i].name));
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("age");
        td.appendChild(document.createTextNode(employees[i].age));
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("salary");
        td.appendChild(document.createTextNode(employees[i].salary));
        tr.appendChild(td);

        document.querySelector("#table").appendChild(tr);
    }
    ages = document.querySelectorAll(".age");
    for (let i = 0; i < employees.length; i++) {
        ages[i].addEventListener("click", function() {
            ages[i].textContent++;
        });
    }
}

function task75() {
    element.innerHTML = `
        <table id = "table"></table>
    `;
    let employees = [
        { name: "employee1", age: 30, salary: 400 },
        { name: "employee2", age: 31, salary: 500 },
        { name: "employee3", age: 32, salary: 600 },
    ];
    for (let i = 0; i < employees.length; i++) {
        tr = document.createElement("tr");

        td = document.createElement("td");
        td.classList.add("name");
        td.appendChild(document.createTextNode(employees[i].name));
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("age");
        td.appendChild(document.createTextNode(employees[i].age));
        tr.appendChild(td);

        td = document.createElement("td");
        td.classList.add("salary");
        td.appendChild(document.createTextNode(employees[i].salary));
        tr.appendChild(td);

        document.querySelector("#table").appendChild(tr);
    }
    salo = document.querySelectorAll(".salary");
    for (let i = 0; i < employees.length; i++) {
        salo[i].addEventListener("click", function() {
            salo[i].textContent = Math.round(Number(salo[i].textContent) * 1.1);
        });
    }
}

function task76() {
    element.innerHTML = `
        <input id = "button" type = "submit" value = "button">
        <table id = "table"></table>
    `;
    document.querySelector("#button").addEventListener("click", function() {
        tr = document.createElement("tr");
        tr.appendChild(document.createTextNode("new row"));
        document.querySelector("#table").appendChild(tr);
    });
}

function task77() {
    element.innerHTML = `
        <input id = "button" type = "submit" value = "button">
        <table id = "table">
            <tr>
                <td>x</td>
                <td>x</td>
            </tr>
            <tr>
                <td>x</td>
                <td>x</td>
            </tr>
        </table>
    `;
    let cnt = 2;
    document.querySelector("#button").addEventListener("click", function() {
        cnt ++;
        document.querySelector("#table").innerHTML = "";
        for (let i = 0; i < cnt; i++) {
            tr = document.createElement("tr");
            for (let j = 0; j < cnt; j++) {
                td = document.createElement("td");
                td.appendChild(document.createTextNode("x"));
                tr.appendChild(td);
            }
            document.querySelector("table").appendChild(tr);
        }
    });
}

function task78() {
    element.innerHTML = `
        <table id = "table">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    `;
    let td = document.querySelectorAll("#table td");
    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener("click", function() {
            td[i].textContent = i + 1;
        });
    }
}

function task79() {
    element.innerHTML = `
        <ul id = "parent">
            <li>1</li>
            <li id = "elem">2</li>
            <li>3</li>
        </ul>
        <input id = "button" type = "submit" value = "button">
    `;
    document.querySelector("#button").addEventListener("click", function() {
        document.querySelector("#elem").remove();
    });
}

function task80() {
    element.innerHTML = `
        <ul id = "parent">
            <li>1</li>
            <li id = "elem">2</li>
            <li>3</li>
        </ul>
    `;
    let li = document.querySelectorAll("#parent li");
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function() {
            li[i].remove();
        });
    }
}

function task81() {
    element.innerHTML = `
        <ul id = "parent">
            <li>text</li>
            <li>text</li>
            <li id = "elem">text</li>
            <li>text</li>
            <li>text</li>
        </ul>
    `;
    elem = document.createElement("li");
    elem.textContent = "new";
    document.querySelector("#parent").insertBefore(elem, document.querySelector("#elem"));
}

function task82() {
    element.innerHTML = `
        <input id = "button" type = "submit" value = "button">
        <input class = "input" type = "text" value = "Imperial Cutter">
    `;
    document.querySelector("#button").addEventListener("click", function() {
        let input = document.querySelector(".input").cloneNode(true);
        element.append(input);
    });
}

function task83() {
    element.innerHTML = `
        <table id = "table">
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
    `;
    let flag = 0;
    let td = document.querySelectorAll("#table td");
    for (let i = 0; i < td.length; i++) {
            td[i].addEventListener("click", function() {
                if (flag != 1) {
                    let input = document.createElement("input");
                    input.setAttribute("class", "input");
                    input.setAttribute("type", "text");
                    input.setAttribute("value", "overwrite td");
                    td[i].appendChild(input);
                    input.addEventListener("keydown", function(event) {
                        if (event.key == "Enter") {
                            td[i].innerHTML = input.value;
                            flag = 0;
                        }
                    });
                    flag = 1;
                }
            });
    }
}

function task84_85() {
    element.innerHTML = `
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
        <style>
            .colored {
                background: red;
            }
        </style>
    `;
    let li = document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener("click", function() {
            li[i].classList.toggle("colored");
        });
    }
}

function task86() {
    element.innerHTML = `
        <table>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr> 
        </table>
        <style>
            .active_td {
                background: green;
            }
        </style>
    `
    let td = document.querySelectorAll("table td");
    let active_el = 0;
    for (let i = 0; i < td.length; i++) {
        td[i].addEventListener("click", function() {
            if (active_el < 3) {
                if(td[i].classList.contains("active_td") == false) {
                    td[i].classList.add("active_td");
                    active_el++;
                } else {
                    td[i].classList.remove("active_td");
                    active_el--;
                }
            } else {
                if (td[i].classList.contains("active_td") == true) {
                    td[i].classList.remove("active_td");
                    active_el--;
                }
            }
        });
    }
}
/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */

function task87() {
    element.innerHTML = `
        <table id = "table"></table>
        <input id = "name" type = "text" value = "employee">
        <input id = "age" type = "number" value = "20">
        <input id = "salary" type = "number" value = "500">
        <input id = "new" type = "submit" value = "add new employee">
    `;

    let employees = [
        { name: "employee1", age: 30, salary: 400 },
        { name: "employee2", age: 31, salary: 500 },
        { name: "employee3", age: 32, salary: 600 },
    ];

    for (let i = 0; i < employees.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
            td.classList.add("name");
            td.textContent = employees[i].name;
            tr.appendChild(td);
        td = document.createElement("td");
            td.classList.add("age");
            td.textContent = employees[i].age;
            tr.appendChild(td);
        td = document.createElement("td");
            td.classList.add("salary");
            td.textContent = employees[i].salary;
            tr.appendChild(td);
        document.querySelector("#table").appendChild(tr);
    }


    //функция инициализации
    function Start() {
        let staff = document.querySelectorAll("#table tr");
        for (let cnt = 0; cnt < staff.length; cnt++) {
            CreateEmployeeEditBtn(staff, cnt);
            CreateDeleteBtn(staff, cnt);
        }
        return staff;
    }


    var staff_old = Start();
    var cnt_edit_btn = document.querySelectorAll(".input");
    var cnt_delete_btn = document.querySelectorAll(".delete_btn");


    //МЕСТО ДЛЯ ОСНОВНОГО КОДА
    document.querySelector("#new").addEventListener("click", AddNewEmployee);
    for (let i = 0; i < cnt_edit_btn.length; i++) {
        cnt_edit_btn[i].addEventListener("keydown", function(event) {
            if (event.key == "Enter") {
                EditEmployee(cnt_edit_btn[i], i);
            }
        });
    }

    /* for (let j = 0; j < cnt_delete_btn.length; j++) {
        cnt_delete_btn[j].addEventListener("click", function() {
            staff_old[j].remove();
            Update();
        });
    } */
    //МЕСТО ДЛЯ ОСНОВНОГО КОДА

    
    //Запись нового сотрудника в таблицу
    function AddNewEmployee() {
        let its_name = document.querySelector("#name").value;
        let its_age = document.querySelector("#age").value;
        let its_salary = document.querySelector("#salary").value;

        let tr_new = document.createElement("tr");
        let td_new = document.createElement("td");
            td_new.classList.add("name");
            td_new.textContent = its_name;
            tr_new.appendChild(td_new);
        td_new = document.createElement("td");
            td_new.classList.add("age");
            td_new.textContent = its_age;
            tr_new.appendChild(td_new);
        td_new = document.createElement("td");
            td_new.classList.add("salary");
            td_new.textContent = its_salary;
            tr_new.appendChild(td_new);
        document.querySelector("#table").appendChild(tr_new);


        Update();
    }

    //Добавление кнопки удалить сотрудника (для какой-то x строки из элементов cnt)
    function CreateDeleteBtn(cnt, x) {
        let td_delete = document.createElement("td");
        td_delete.innerHTML =  `<input class = "delete_btn" id = "persond${x}" type = "submit" value = "delete employee">`;
        /* td_delete.setAttribute("class", "delete_btn");
        td_delete.setAttribute("type", "submit");
        td_delete.setAttribute("value", "delete employee"); */
        cnt[x].appendChild(td_delete)
    

        let newDelete = document.querySelector(`#persond${x}`);
        newDelete.addEventListener("click", function() {
            staff_old[x].remove();
            Update();
        });
    };

    //Удаление сотрудника
    function DeleteEmployee(x) {
        /* let staff = document.querySelectorAll("#table tr");
        staff[x].remove();
        staff_old = staff; */
        /* let staff = document.querySelectorAll("#table tr");
        staff[x].remove();
        staff_old = staff; */
    }

    //Добавление кнопки редактироания сотрудника
    function CreateEmployeeEditBtn(cnt, x) {
        let td_edit = document.createElement("td");
        td_edit.innerHTML = `<input class = "input" id="person${x}" type = "text" value = "NAME AGE SALARY">`;
        cnt[x].appendChild(td_edit);
        
        let newInput = document.querySelector(`#person${x}`);
        newInput.addEventListener("keydown", function(event) {
            if (event.key == "Enter") {
                EditEmployee(newInput, x);
            }
        });


    }

    //Редактирование сотрудника
    function EditEmployee(edit_btn, x) {
        let employee_inf = edit_btn.value.split(" ");
        let td_old = document.querySelectorAll("#table td");
        let cnt = x*5;
        let max_cnt = cnt + 3;
        let i = 0;
        for (cnt; cnt < max_cnt; cnt++) {
            let td_new = employee_inf[i];
            td_old[cnt].textContent = td_new;
            i++;
        }
     /*    tr_new = document.createElement("tr");
        td_new = document.createElement("td");
            td_new.classList.add("name");
            td_new = employee_inf[0];
            num = x*5;
        td_old[num].textContent = td_new;
            tr_new.appendChild(td_new);
        td_new = document.createElement("td");
            td_new.classList.add("age");
            td_new = employee_inf[1];
            num++;
        td_old[num].textContent = td_new;
            tr_new.appendChild(td_new);
        td_new = document.createElement("td");
            td_new.classList.add("salary");
            td_new = employee_inf[2];
            num++;
        td_old[num].textContent = td_new;
            tr_new.appendChild(td_new);
        staff_old[x].innerHTML = tr_new; */
    }

    //Функция обновления
    function Update() {
        let staff_new = document.querySelectorAll("#table tr");
        if (staff_old.length < staff_new.length) {
            for (let cnt = staff_old.length; cnt < staff_new.length; cnt++) {
                CreateEmployeeEditBtn(staff_new, cnt);
                CreateDeleteBtn(staff_new, cnt);
            }
        }
        staff_old = staff_new;
        cnt_edit_btn = document.querySelectorAll(".input");
        cnt_delete_btn = document.querySelectorAll(".delete_btn");
    }
}