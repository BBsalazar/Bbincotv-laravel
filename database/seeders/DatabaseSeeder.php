<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $admin = Role::create(['name' => 'Administrador']);
        $client = Role::create(['name' => 'Cliente']);
        $treasury = Role::create(['name' => 'Tesoreria']);

        $permissions = [
            'create',
            'read',
            'update',
            'delete',
        ];

        foreach(Role::all() as $rol){
            foreach($permissions as $p){
                Permission::create(['name' => "{$rol->name} $p"]);

                
            }
        }
        
        $admin->syncPermissions($Permission:: all());
        $client->syncPermissions($Permission:: where('name','like','%cliente%'));
        $treasury->syncPermissions($Permission:: where('name','like','%tesoreria%'));


    }
}
