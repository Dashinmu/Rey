<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DEMO-API</title>
    </head>
    <body>
        <?php
            //Функция авторизации
            function oauth () {
                $url_api_oauth = 'https://taxi-demo.intermobility.ru/tpapi/oauth/token';

                $userid = ''; //указать user_id
                $clientid = ''; //указать client_id
                $password = ''; //указать пароль

                $oauth_header = array (
                    'Content-Type: application/x-www-form-urlencoded'
                );

                $oauth_data = 'grant_type=client_credentials';

                $ch = curl_init($url_api_oauth);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);
                curl_setopt($ch, CURLOPT_USERPWD, $userid . '/' . $clientid . ':' . $password);
                curl_setopt($ch, CURLOPT_HEADER, true);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
                curl_setopt($ch, CURLOPT_POSTFIELDS, $oauth_data);
                curl_setopt($ch, CURLOPT_HTTPHEADER, $oauth_header);
                $key = curl_exec($ch);
                curl_close($ch);          

                $file_json = 'oath_key.json';
                $result_json = json_encode($key);
                file_put_contents($file_json, $result_json);

                echo 'access key generated!<br>';
            }
            //Функция запроса
            function query () {
                $url_api = 'https://taxi-demo.intermobility.ru/tpapi/';

                $access_token = ''; //Токен доступа взять из oath_key.json
                $api_headers = array (
                    'Authorization: Bearer '. $access_token,
                    'content-type: application/json',
                    'accept: */*'
                );

                $api_data = 'pageNum=1&pageSize=10'; //Указать запрос

                $ch = curl_init();
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HEADER, true);
                curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
                curl_setopt($ch, CURLOPT_URL, $url_api.'vehicles?');
                curl_setopt($ch, CURLOPT_POSTFIELDS, $api_data);
                curl_setopt($ch, CURLOPT_HTTPHEADER, $api_headers);
                $response = curl_exec($ch);
                curl_close($ch);

                $file_html = 'response.html';
                file_put_contents($file_html, $response);

                echo 'query success generated!';
            }
            
            if (isset($_POST["oAuth"])) { 
                oauth(); 
            }

            if (isset($_POST["Query"])) {
                query();
            }

        ?>

        <form method = "post">
            <input type = "submit" name = "oAuth" value = "oAuth">
            <input type = "submit" name = "Query" value = "Query">
        </form>

    </body>
</html>