<?php

namespace Tests\Feature\Http\Controllers\TerminalApi;

use Tests\TestCase;
use App\Facades\Settings;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class RegisterControllerTest extends TestCase
{
    use DatabaseMigrations;
    
    //Все модели оборудования и ИД сборщиков
    private  $assembler_ids = ['as-2'];
    private $terminal_models = ['КВЗР.192850.001-01', 'MT-07', 'MT-10'];
    private $alcotester_models = ['Dingo B-01', 'Dingo B-02',  'E200',  'Alcoframe'];
    private $tonometer_models = ['UA767PC', 'TM2655', 'UA911BT-C'];
    private $thermometer_models = ['JXB-183'];

    //Пример
    private $data = [
        'assembler_id' => 'as-2',
        'terminal' => [
            'model' => 'КВЗР.192850.001-01', 
            'serial_number' => 'SN03019019',
            'version' => '8.7.0'
        ],
        'alcotester' => [
            'serial_number' => '',
            'model' => 'Dingo B-01',
            'status' => ''
        ],
        'tonometer' => [
            'serial_number' => '',
            'model' => 'UA767PC',
            'status' => ''
        ],
        'thermometer' => [
            'serial_number' => '',
            'model' => 'JXB-183',
            'status' => ''
        ]
    ];

    //Проверка поля assembler_id
    public function testAssemberIdValidation()
    {
        $data = $this->data;
        $assembler_ids = $this -> assembler_ids;
        $flag = false;

        $data['assembler_id'] = null;
        Settings::set('terminal_register_require_assembler_id', true);
        $response = $this->json('POST', '/api/v2/terminal/register', $data);
        $response->assertStatus(422)->assertJson( ['error' => 'assembler_id is null'] );
        Settings::set('terminal_register_require_assembler_id', false);
        
        foreach ( $assembler_ids as $value ) {
            if ($data['assembler_id'] == $value) 
            {
                $flag = true;
            }
            if ($flag == 0)
            {
                $response = $this->json('POST', '/api/v2/terminal/register', $data);
                $response->assertStatus(422)->assertJson( ['error' => 'Unknowed assembler_id field'] );
            }
        }
    }

    //Проверка поля terminal
    public function testTerminalValid()
    {
        $data = $this->data;

        $data['terminal'] = null;
        $response = $this->json('POST', '/api/v2/terminal/register', $data);
        $response->assertStatus(422)->assertJson( ['error' => 'terminal is null'] );
    }

    //Проверка поля terminal.serial_number
    public function testTerminalSNValid()
    {
        $data = $this->data;

        $data['terminal']['serial_number'] = null;
        $response = $this->json('POST', '/api/v2/terminal/register', $data);
        $response->assertStatus(422)->assertJson( ['error' => 'terminal.serial number is null'] );
    }

    //Проверка поля terminal.model
    public function testTerminalModelValid()
    {
        $data = $this->data;
        $terminal_models = $this -> terminal_models;
        $flag = 0;

        foreach ($terminal_models as $value) 
        {
            if ($data['terminal']['model'] == $value) $flag = 1;
            if ($flag == 0)
            {
                $response = $this->json('POST', '/api/v2/terminal/register', $data);
                $response->assertStatus(422)->assertJson( ['error' => 'Unknowed terminal.model field'] );
            }
        }
    }

    //Проверка поля alcotester.serial_number
    public function testAlcotesterSNValid()
    {
        $data = $this->data;

        $data['alcotester']['serial_number'] = null;
        $response = $this->json('POST', '/api/v2/terminal/register', $data);
        $response->assertStatus(422)->assertJson( ['error' => 'alcotester.serial number is null'] );
    }

    //Проверка поля alcotester.model
    public function testAlcotesterModelValid()
    {
        $data = $this -> data;
        $alcotester_models = $this -> alcotester_models;
        $flag = 0;

        foreach ($alcotester_models as $value)
        {
            if ($data['alcotester']['model'] == $value) $flag = 1;
            if ($flag == 0)
            {
                $response = $this->json('POST', '/api/v2/terminal/register', $data);
                $response->assertStatus(422)->assertJson( ['error' => 'Unknowed alcotester.model field'] );
            }
        }
    }

    //Проверка поля tonometer.serial_number
    public function testTonometerSNValid()
    {
        $data = $this->data;

        $data['tonometer']['serial_number'] = null;
        $response = $this->json('POST', '/api/v2/terminal/register', $data);
        $response->assertStatus(422)->assertJson( ['error' => 'tonometer.serial number is null'] );
    }

    //Проверка поля tonometer.model
    public function testTonometerModelValid()
    {
        $data = $this -> data;
        $tonometer_models = $this -> tonometer_models;
        $flag = 0;

        foreach ($tonometer_models as $value)
        {
            if ($data['tonometer']['model'] == $value) $flag = 1;
            if ($flag == 0)
            {
                $response = $this->json('POST', '/api/v2/terminal/register', $data);
                $response->assertStatus(422)->assertJson( ['error' => 'Unknowed tonometer.model field'] );                
            }
        }
    }

    //Проверка поля thermometer.serial_number
    public function testThermometerSNValid()
    {
        $data = $this->data;

        $data['thermometer']['serial_number'] = null;
        $response = $this->json('POST', '/api/v2/terminal/register', $data);
        $response->assertStatus(422)->assertJson( ['error' => 'thermometer.serial number is null'] );
    }

    //Проверка поля thermometer.model
    public function testThermometerModelValid()
    {
        $data = $this -> data;
        $thermometer_models = $this -> thermometer_models;
        $flag = 0;

        foreach ($thermometer_models as $value)
        {
            if ($data['thermometer']['model'] == $value) $flag = 1;
            if ($flag == 0)
            {
                $response = $this->json('POST', '/api/v2/terminal/register', $data);
                $response->assertStatus(422)->assertJson( ['error' => 'Unknowed thermometer.model field'] );                  
            }
        }
    }
}