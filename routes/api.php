<?php

use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {
    Route::get('/transactions', [TransactionController::class, 'index'])->name("transactions.index");
    Route::get('/transactions/{id}', [TransactionController::class, 'show'])->name("transactions.show");
    Route::post('/transactions/post', [TransactionController::class, 'store'])->name("transactions.store");
    Route::put('/transactions/update/{id}', [TransactionController::class, 'update'])->name("transactions.update");
    Route::delete('/transactions/delete/{id}', [TransactionController::class, 'destroy'])->name("transactions.delete");
});
