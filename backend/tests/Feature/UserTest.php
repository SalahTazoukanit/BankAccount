<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_example(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }

    //choisir des données differentes

    public function testRegister () {

        $user = [
            "name" => "Salaheddine",
            "email" => "testSalah@gmail.com",
            "password" => "Salah12345!",
            "password_confirmation" => "Salah12345!"
        ];

        $response = $this->postJson('/register' , $user);

        $response->assertStatus(201);

        $this->assertDatabaseHas('users', [
            'email' => 'johndoe@example.com',
        ]);

        $response->assertJson([
            'message' => 'Utilisateur créé avec succès.',
        ]);
    }

    public function testRegisterWithInvalidMail(){

        $user = [
            "name" => "Salaheddine",
            "email" => "testSalah@",
            "password" => "Salah12345!",
            "password_confirmation" => "Salah12345!"
        ];

        $response = $this->postJson('/register', $user);

        $response->assertStatus(422);

        $response->assertJson([
            'message' => 'Champ email pas valide.',
        ]);
    }
}
