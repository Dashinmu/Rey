<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>task</title>
    </head>
    <body>
        <div>Выполнил: Матюшин Даниил | БФ-ПНИПУ | ПОВТ-19д</div>
        <?php

            $url_api = 'https://fgis.gost.ru/fundmetrology/eapi/';

            //Для http_build_query()
            $options = array(
                'year' => 2021, //Ищет только в указаном году! Если не указан, то текущий. Поэтому вот...
                'search' => '*GBKAN0086*'
            );

            //Получение информации и исправление сертификата SSL
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_HEADER, false);
            curl_setopt($ch, CURLOPT_URL, $url_api.'vri?'.http_build_query($options));
            $response = curl_exec($ch);
            curl_close($ch);          

            //Вывод полученной информации в строчку json
            $file_json = 'info.json';
            $result_json = json_encode($response);
            file_put_contents($file_json, $result_json);

            //Вывод в html, ну curl и так html возвращает
            $file_html = 'info.html';
            file_put_contents($file_html, $response);

            //Вывод в txt в читаемом виде
            $file_txt = fopen('info.txt', 'w');
            $result_txt = json_decode($response); //Можно и массив, но объект приятней выглядит
            $data = print_r($result_txt, true);
            fwrite($file_txt, $data);
            fclose($file_txt);
/* 
            Второй способ для работы с API. Для какого-нибудь API с погодой вообще идеал 

            $url = 'https://fgis.gost.ru/fundmetrology/eapi/vri?year=2021&search=*GBKAN0086*'; //По документации только vri способен искать серийный номер

            //Для исправление ошибки сертификата SSL
            $user_option = array(
                'ssl' => array(
                    'verify_peer' => false,
                    'verify_peer_name' => false,
                ),
            );
            $context = stream_context_create($user_option);

            //Получение информации и запись
            $res = file_get_contents($url, false, $context);
            $result = json_encode($res, true);
            $file = 'info.json';
            file_put_contents($file, $result);
 */  
            echo 'success!';
            
        ?>

    </body>
</html>