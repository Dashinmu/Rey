<?php
    //Фукнция получения массива файлов, названия которых и есть указание даты логов. Возвращает массив файлов (дат)
    function get_date()
    {
        $dir = __DIR__ . '/logs/'; //Директария логов

        $files = []; //Массив с именами файлов = дата записи логов
    
        //Поиск всех файлов с расширением .log
        foreach( glob($dir . '*.log') as $file )
        {
            $file_name = basename($file);
            array_push($files, $file_name);
        }
        return ($files);
    }

    //Функция получения логов из $file_name файла (даты). Возвращает массив логов
    function get_logs($file_name) 
    {
        $index = 1; //Номер лога

        $logs = []; //Массив с логами

        //Переменные
        $date_string = '';
        $type_string = '';
        $info_string = '';

        $dir = __DIR__ . '/logs/'; //Директория логов
        $log_file_name = $dir.$file_name; //Имя файла с логом

        $f = fopen($log_file_name, "r"); //Открыть файл логов

        //Считывание всех строк в файле
        while ( ( $line = fgets($f) ) !== false )
        {
            //Флаг лога, все логи начинаются с '['
            if ($line[0] == '[') 
            {
                //Если информация не пустая (пробелы грохаются trim) - записать лог
                if ( !empty( trim($info_string) ) )
                {
                    $index = ['date' => $date_string, 'type' => $type_string, 'info' => $info_string];
                    array_push($logs, $index);
                }

                //Позиционирование и запись в переменные
                $date_index_end = strpos($line, ']');
                $date_string = substr($line, 1, $date_index_end - 1);
                $type_index_spacer = strpos($line, ':', $date_index_end);
                $type_string = substr($line, $date_index_end + 2, $type_index_spacer - $date_index_end - 2);
                $info_string = substr($line, $type_index_spacer + 2, strlen($line));
            } else 
            {
                $info_string = $info_string.$line;
            }
        }
        //Запись последнего лога
        if ( !empty( trim($info_string) ) )
        {
            $index = ['date' => $date_string, 'type' => $type_string, 'info' => $info_string];
            array_push($logs, $index);
        }
        return($logs);
    }
?>