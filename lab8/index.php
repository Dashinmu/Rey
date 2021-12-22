<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>lab 8</title>
    </head>
    <body>
        <?php date_default_timezone_set("UTC + 5"); //GMT + 5 ?>

        <!-- 1st Start -->
        <h1> Задание 1 </h1>
            <p> Ну я установил XAMPP. Так и так ничего не понятно зачем так мудрить со сложением строк через ТОООООООЧКУ.</p>
        <!-- 1st End -->

        <!-- 2nd Start -->
        <?php echo '<h1>Задание 2</h1>';
            //ЭЙ-ЧО
            echo '<h2>Шото там с переменными</h2>';
                $a = 3;
                echo 'a = '.$a.'<br>';
            
                $a = 10; $b = 2;
                echo 'a + b = '.$a + $b.'      a - b = '.$a - $b.'      a * b = '.$a * $b.'      a / b = '.$a / $b.'<br>';

                $a = 10; $b = 2; $c = 5; $sum = $a + $b + $c;
                echo ' a + b + c = '.$sum.'<br>';
                
                $a = 17; $b = 10; $c = $a - $b; $d = 7; $result = $c + $d;
                echo 'a - b + d'.$result.'<br>';
            
            echo '<h2>Извращения над строками</h2>';
                $text = 'Hello, World!'; //Есть классная песенька Hello, World! Исполняет милый робот
                echo $text.'<br>';

                $text1 = 'Hello, ';
                $text2 = 'World!';
                echo $text1.$text2.'<br>';

                $name = 'Dashinmu & H1eb';
                echo 'Hi, '.$name.'! <br>';

                $age = '20';
                echo "I'm ".$age."year's old <br>"; //Вывод: для текста лучше использовать "". Хотя они друг друга вполне могут заменить? " '' " или ' "" ' <--

            echo "<h2>Пора резать строки</h2>";
                $text = "abcde";
                echo $text[0].$text[2].$text[4]."<br>";

                $text[0] = "!";
                echo $text."<br>";

                $num = "12345";
                echo "Sum = ".$num[0] + $num[1] + $num[2] + $num[3] + $num[4]."<br>";
            

            echo "<h2>----</h2>";
                $SecPerH = 3600;
                $SecPerD = $SecPerH * 24;
                $SecPerM = $SecPerD * 30;
                echo "Seconds per hour = ".$SecPerH."       Seconds a day = ".$SecPerD."       Seconds in a month = ".$SecPerM."<br>";

                $currentHour = date("h");
                $curentMinute = date("i");
                $currentSecond = date("s");
                $currentTime = $currentHour.":".$curentMinute.":".$currentSecond." ".date("A"); 
                echo $currentTime."<br>";

                $square = 10;
                echo $square." ---> ";
                $square = pow($square, 2);
                echo $square."<br>";
        ?>
        <!-- 2nd End -->

        <!-- 3rd Start -->
        <?php echo "<h1>Задание 3</h1>";
            echo "<h2>Массивчики</h2>";
                $arr = ["a", "b", "c"];
                echo var_dump($arr)."<br>";

                echo $arr[0]."  ".$arr[1]."  ".$arr[2]."<br>";

                $arr = ["a", "b", "c", "d"];
                echo $arr[0]."+".$arr[1].",".$arr[2]."+".$arr[3]."<br>";

                $arr = [2, 5, 3, 9];
                $result = $arr[0] * $arr[1] + $arr[2] * $arr[3];
                echo "Result = ".$result."<br>";

                $arr = [];
                $arr[0] = "1"; $arr[1] = "2"; $arr[2] = "3"; $arr[3] = "4"; $arr[4] = "5";
                echo var_dump($arr)."<br>";
        
            echo "<h2>Какие-то ассоциативные массивы</h2>";
                $arr = ["a" => 1, "b" => 2, "c" => 3];
                echo $arr["c"]."<br>";

                $arr = ["a" => 1, "b" => 2, "c" => 3];
                echo $arr["a"] + $arr["b"] + $arr["c"]."<br>";

                $arr = ["Коля" => "1000$", "Вася" => "500$", "Петя" => "200$"];
                echo $arr["Петя"]."  ".$arr["Коля"]."<br>"; 

                $arr = [
                    1 => "Monday",
                    2 => "Tuesday",
                    3 => "Wednesday",
                    4 => "Thursday",
                    5 => "Friday",
                    6 => "Saturday",
                    7 => "Sunday",
                ];
                $currentDay = date("N", strtotime(date("l"))); //Сложнааа
                echo $arr[$currentDay]."<br>";

                $day = 3;
                echo $arr[$day]."<br>";
        
            echo "<h2>Многомерные массивчики</h2>";
                $arr = [
                        "cms" => ["joomla", "wordpress", "drupal"],
                        "colors" => ["blue" => "голубой", "red" => "красный", "green" => "зеленый"]
                ];
                echo $arr["cms"][0]." ".$arr["cms"][2]." ".$arr["colors"]["green"]." ".$arr["colors"]["red"]."<br>";

                $arr = [
                        "ru" => [1 => "ПН", 2 => "ВТ", 3 => "СР", 4 => "ЧТ", 5 => "ПТ", 6 => "СБ", 7 => "ВС"],
                        "en" => [1 => "Mon", 2 => "Tue", 3 => "Wed", 4 => "Thu", 5 => "Fri", 6 => "Sat", 7 => "Sun"],
                ];
                echo $arr["ru"][1]." ".$arr["en"][3]."<br>";

                $lang = "en";
                $day = 3;
                echo $arr[$lang][$day]."<br>";
        ?>
        <!-- 3rd End -->

        <!-- 4th Start -->
        <?php echo "<h1>Задание 4</h1>";
                echo "<h2>if-else, switch-case</h2>";
                $month = 7;
                $yearArr = ["Зима","Весна","Лето","Осень"];

                if ($month == 1 || $month == 2 || $month == 12) {
                        echo $yearArr[0]."<br>";
                } elseif ($month == 3 || $month == 4 || $month == 5) {
                        echo $yearArr[1]."<br>";
                } elseif ($month == 6 || $month == 7 || $month == 8) {
                        echo $yearArr[2]."<br>";
                } elseif ($month == 9 || $month == 10 || $month == 11) {
                        echo $yearArr[3]."<br>";
                }

                $year = 2001;
                $flag = false;
                if (($year % 4 == 0) && !($year % 100 == 0)) {
                        $flag = true;
                }
                else {
                        $flag = false;
                }
                switch ($flag) {
                        case false:
                                echo $year." год не високосный<br>";
                                break;
                        case true:
                                echo $year." год високосный <br>";
                                break;
                }

                $str = "abcde";
                $flag = false;
                if ($str[0] == "a") {
                        $flag = true;
                }
                switch ($flag) {
                        case true:
                                echo "Да<br>";
                                break;
                        case false:
                                echo "Нет<br>";
                                break;
                }

                $num = "12345";
                switch ($num[0]) {
                        case 1:
                                echo "Да <br>";
                                break;
                        case 2:
                                echo "Да <br>";
                                break;
                        case 3:
                                echo "Да <br>";
                                break;
                        default:
                                echo "Нет <br>";
                                break;
                }

                $str = "333";
                echo $str." Sum = ".$str[0]+$str[1]+$str[2]."<br>";

                $str = "123321";
                $sum1 = $str[0] + $str[1] + $str[2];
                $sum2 = $str[3] + $str[4] + $str[5];
                if ($sum1 == $sum2) {
                        echo "Да<br>";
                } else {
                        echo "Нет<br>";
                } 
        ?>
        <!-- 4th End -->

        <!-- 5th Start -->
        <?php echo "<h1>Задание 5</h1>";
                echo "<h2>Работа с foreach</h2>";
                $arr = ["html", "css", "php", "js", "jq"];
                foreach ($arr as $value) {
                        echo $value."<br>";
                }
                unset($value); //очищение - не обязательно
                echo "<br>";

                $arr = [1, 2, 3, 4, 5];
                $result = 0;
                echo "2) ";
                foreach ($arr as $value) {
                        $result = $result + $value;
                }
                echo $result."<br>";

                $arr = [1, 2, 3, 4, 5];
                $result = 0;
                foreach ($arr as $value) {
                        $result = $result + $value*$value;
                }
                echo $result."<br>";
        
                echo "<h2>Работа с ключами</h2>";
                $arr = ["green" => "зеленый", "red" => "красный", "blue" => "голубой"];
                foreach ($arr as $key => $value) {
                        echo $key." - ".$value."; <br>";
                }

                $arr = ["Коля" => "200", "Вася" => "300", "Петя" => "400"];
                foreach ($arr as $key => $value) {
                        echo $key." - зарплата ".$value."$ <br>";
                }

                echo "<h2>Циклы while и for</h2>";
                echo "<h3>while</h3> <br>";
                $a = 1;
                while ($a <= 100) {
                        echo $a."  ";
                        $a++;
                }
                echo "<br>";

                $a = 11;
                while ($a <= 33) {
                        echo $a."  ";
                        $a++;
                }
                echo "<br>";

                $a = 0;
                while ($a <= 100) {
                        echo $a."  ";
                        $a = $a + 2;
                }
                echo "<br>";

                $a = 0;
                $sum = 0;
                while ($a <= 100) {
                        $sum = $sum + $a;
                        $a = $a + 1;
                }
                echo $sum."<br>";

                echo "<h3>for</h3> <br>";
                for ($i = 0; $i <= 100; $i++) { 
                        echo $i."  ";
                }
                echo "<br>";

                for ($i = 11; $i <= 33; $i++) { 
                        echo $i."  ";
                }
                echo "<br>";

                for ($i = 0; $i <= 100; $i+=2) { 
                        echo $i."  ";
                }
                echo "<br>";

                $sum = 0;
                for ($i = 0; $i <= 100; $i++) { 
                        $sum = $sum + $i;
                }
                echo $sum."<br>";

            
                echo "<h3>other task</h3>";
                $arr = [2, 5, 9, 15, 0, 4];
                foreach ($arr as $value) {
                        if (($value >= 3) && ($value <= 10)) {
                                echo $value."<br>";
                        }
                }
                echo "<br>";

                $arr = [-2, 5, -9, 15, -4];
                $sum = 0;
                foreach ($arr as $value) {
                        if ($value >= 0) {
                                $sum += $value;
                        }
                }
                echo $sum."<br>";

                $arr = [1, 2, 5, 9, 4, 13, 4, 10];
                foreach ($arr as $value) {
                        if ($value == 4) {
                                echo "Есть!<br>";
                                break;
                        }
                }
                echo "<br>"; //Если нету

                $arr = ["10", "20", "30", "50", "235", "3000"];
                foreach ($arr as $value) {
                        if ($value[0] == 1 || $value[0] == 2 || $value[0] == 5) {
                                echo $value."  ";
                        }
                }
                echo "<br>";

                $arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
                $str = "-";
                foreach ($arr as $value) {
                        $str = $str.$value."-";
                }
                echo $str."<br>";

                $arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
                foreach ($arr as $key => $day) {
                        if ($key < 5){
                                echo $day." ";
                        }
                        else {
                                echo "<b>".$day."</b> ";
                        }
                }
                echo "<br>";

                $arr = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
                $day = date("N");
                foreach ($arr as $key => $dayweek) {
                        if ($key == $day - 1){
                                echo "<i>".$dayweek."</i> ";
                        }
                        else {
                                echo $dayweek." ";
                        }
                }
                echo "<br>";
        ?>



        <!-- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- -->                


        <!-- 8th Start -->
        <?php echo "<h1>Задание 8</h1>";
                //Соединение за базой данных
                $host = "localhost"; 
                $user = "root"; 
                $password = ""; 
                $db_name = "_test"; 
                $link = mysqli_connect($host, $user, $password, $db_name);

                //Запросы...

                //Возвращение таблицы в нормальное состояние
                $sql = "DELETE FROM `workers` WHERE ID > 6;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                //Вывести всю таблицу
                echo "<table>";
                $sql = "SELECT * FROM `workers`;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo "<tr>";
                        echo "<td>".$id."</td>";
                        echo "<td>".$name."</td>";
                        echo "<td>".$age."</td>";
                        echo "<td>".$salo."</td>";
                }
                echo "</table>";
                echo"<br>";
                
                //Вывести работника с id = 3
                $sql = "SELECT * FROM `workers` WHERE `ID` = 3;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Salary = 1000
                $sql = "SELECT * FROM `workers` WHERE `Salary` = 1000;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Age = 23
                $sql = "SELECT * FROM `workers` WHERE `Age` = 23;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Salary > 400
                $sql = "SELECT * FROM `workers` WHERE `Salary` > 400;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Salary >= 500
                $sql = "SELECT * FROM `workers` WHERE `Salary` >= 500;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работниа с Salary != 500
                $sql = "SELECT * FROM `workers` WHERE `Salary` != 500;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Salary <= 900
                $sql = "SELECT * FROM `workers` WHERE `Salary` = 900;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Миссия: Вывести Васю
                //Цель миссии: Забрать сало
                //Прогресс: Выполнено
                $sql = "SELECT `Age`, `Salary` FROM `workers` WHERE `Name` = \"Вася\";";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Age [26..28]
                $sql = "SELECT * FROM `workers` WHERE Age > 25 AND Age < 29;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести Петю
                $sql = "SELECT * FROM `workers` WHERE Name = \"Петя\";";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести Петя-Вася
                $sql = "SELECT * FROM `workers` WHERE Name = \"Петя\" OR Name = \"Вася\";";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести не Петю
                $sql = "SELECT * FROM `workers` WHERE Name != \"Петя\";";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Age = 27 | Salary = 1000
                $sql = "SELECT * FROM `workers` WHERE Age = 27 OR Salary = 1000;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работников с Age = [23..26] | Salary = 1000
                $sql = "SELECT * FROM `workers` WHERE (Age > 22 AND Age < 27) OR Salary = 1000;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Age = [23..27] & Salary = [400..1000]
                $sql = "SELECT * FROM `workers` WHERE Age > 22 AND Age < 28 AND Salary > 399 AND Salary < 1001;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Вывести работника с Age = 27 & Salary != 400
                $sql = "SELECT * FROM `workers` WHERE Age = 27 AND Salary != 400;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";

                //Добавить (Никита, 26, 300) --> Никитка повзрослел
                $sql = "INSERT INTO `workers`(`ID`, `Name`, `Age`, `Salary`) VALUES (\"\", \"Никита\", 26, 300);";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                //Добавить (Светлана, null, 1200) --> NULL НЕ ПРОКАТИТ!!!! 0 вот подойдёт))
                $sql = "INSERT INTO `workers`(`ID`, `Name`, `Age`, `Salary`) VALUES (\"\", \"Светлана\", \"\", 1200);";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                //Добавить (Ярослав, 30, 1200) и (Пётр, 31, 1000)
                $sql = "INSERT INTO `workers`(`ID`, `Name`, `Age`, `Salary`) VALUES (\"\", \"Ярослав\", 30, 1200), (\"\", \"Пётр\", 31, 1000);";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                $sql = "SELECT * FROM `workers` WHERE ID > 6;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";
        /*
                //Удалить рабнотника c ID = 7
                $sql = "SELECT * FROM `workers` WHERE ID = 7;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        
                //Удалить Колю --> КОЛЯ В СДЕЛКУ НЕ ВХОДИЛ
                $sql = "SELECT * FROM `workers` WHERE Name = \"Коля\";";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                //Удалить всех работников с Age = 23 --> F Молодым
                $sql = "SELECT * FROM `workers` WHERE Age = 23;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
        
                //Возвращение таблицы в нормальное состояние --> В один момент я осознал... Что я за>:Xлся листать страницу 
                $sql = "DELETE FROM `workers` WHERE ID > 6;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                $sql = "SELECT * FROM `workers`;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                foreach ($result as $row) {
                        $id = $row["ID"];
                        $name = $row["Name"];
                        $age = $row["Age"];
                        $salo = $row["Salary"];
                        echo $id."      ".$name."       ".$age."        ".$salo."<br>";
                }
                echo"<br>";
        */

        /*
                //Обновить Васе Salary = 200 --> Аутсайдер Украины
                $sql = "UPDATE `workers` SET Salary = 200 WHERE Name = \"Вася\";";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                
                //Обновить ID == 4 Age = 35
                $sql = "UPDATE `workers` SET Age = 35 WHERE Salary = 500;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));
                
                //Обновить Salary == 500 Salary = 700
                $sql = "UPDATE `workers` SET Salary = 700 WHERE Salary = 500;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                //Обновить ID = [3..4] Age = 23
                $sql = "UPDATE `workers` SET Age = 23 WHERE ID > 2 AND ID < 5;";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

                //Обновить Васю на Женю и Salary = 900 --> Из грязи в князи
                $sql = "UPDATE `workers` SET Name = \"Женя\" WHERE Name = \"Вася\";";
                $result = mysqli_query($link, $sql) or die(mysqli_error($link));

        */
        ?>
        <!-- 8th End -->

        <!-- Возвращаемся в HTML? -->
        <h1>Задание 9</h1>
        <form action = "" method = "GET">
                <input type = "number" name = "number1">
                <input type = "number" name = "number2">
                <input type = "submit" value="Calculate">
                <?php 
                        if ( empty($_GET["number1"]) || empty($_GET["number2"]) ) {
                                echo "Прост чтоб надоедливую надпись WARNING убрать";
                        } else {
                                echo "Sum = ".($_GET["number1"]+$_GET["number2"]);
                        }
                ?>
        </form>
        
        <h1>Задание 10</h1>
        <form action = "" method = "GET">
                <input type = "number" name = "number3">
                <input type = "submit" value = "Get">
                <?php 
                        if ( empty($_GET["number3"]) ) {
                                echo "Прост чтоб надоедливую надпись WARNING убрать";
                        } else {
                                if ($_GET["number3"] == 1) echo "Hello!";
                                elseif ($_GET["number3"] == 2) echo "Bye!";
                        }
                ?>
        </form>

        <h1>Задание 11</h1>
                <form action = "" method = "GET">
                <p> Введите число [1..5]: <input type = "number" name = "numID"><input type = "submit"></p>
                <?php 
                        $arr = ["a", "b", "c", "d", "e"];
                        if ( empty($_GET["numID"]) ) {
                                echo "Прост чтоб надоедливую надпись WARNING убрать";
                        } else {
                                echo $arr[$_GET["numID"]-1];
                        }
                ?>
        </form>

        <h1>Задание 12</h1>
                <form action = "" method = "GET">
                <input type = "text" name = "name">
                <input type = "submit">
                <?php 
                        if ( empty($_GET["name"]) ) {
                                echo "Прост чтоб надоедливую надпись WARNING убрать";
                        } else {
                                echo "Hello, ".$_GET["name"];
                        }
                ?>
        </form>

        <h1>Задание 13</h1>
                <?php
                        if (!isset($_GET["age"])) {
                ?>
                <form action="" method="GET">
                        <input type = "number" name = "age">
                        <input type = "submit" value = "Send form">
                </form>
                <?php
                        }
                ?>
                <?php
                        if (isset($_GET["age"])) {
                                $age = strip_tags($_GET["age"]);
                                echo "U R ".$age." years old";
                        }
                ?>

        <h1>Задание 14</h1>
                <form action = "" method = "GET">
                <input name = "name1" value = "<?php if (isset($_GET["name1"])) echo $_GET["name1"]; ?>">
                <textarea name = "message">
                        <?php if (isset($_GET["message"])) echo $_GET["message"]; ?>
                </textarea>
                <input type = "submit">
        </form>

        <h1>Задание 15</h1>
                <?php
                        $_SESSION["test"] = "Test Session";
                        echo $_SESSION["test"];
                ?>

        <h1>Задание 16</h1>
                <?php
                        if (!isset($_SESSION["cnt_update"])) {
                                $_SESSION["cnt_update"] = 0;
                                echo "Страница ещё не обновлялась";
                        } 
                        else {
                                $_SESSION["cnt_update"] = $_SESSION["cnt_update"] + 1;
                                echo "Страница обновлялась ".$_SESSION["cnt_update"]." раз";
                        }
                ?>

        <h1>Задание 17</h1>
                <form action = "" method = "POST">
                <input type = "text" name = "country">
             
                </form>
                <?php
                        if (!isset($_POST["country"])) {
                                echo "";
                        } else {
                                $country = $_POST["country"];
                                if (isset($country)) $_SESSION["country"] = $country;
                        }
                ?>

        <h1>Задание 18</h1>
                <?php
                        if (empty($_SESSION["time"]) && empty($_SESSION["datestart"])) {
                                $_SESSION["time"] = time();
                                $_SESSION["datestart"] = date('l jS \of F Y h:i:s A');
                        }
                        echo $_SESSION["datestart"]."<br>";
                        echo time() - $_SESSION["time"]." seconds ago";
                ?>
    </body>
</html>