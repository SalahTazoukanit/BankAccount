<?php

namespace App\Http\Controllers;


use App\Http\Requests;
use Illuminate\Http\Request;
use App\Models\Transaction;

class TransactionController extends Controller
{
    public function index()
    {
        $transactions = Transaction::all();

        return response()->json([
            "transactions" => $transactions
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'user_id' => "required",
            'title' => 'string|required',
            'description' => 'string|sometimes',
            'date' => 'date|sometimes',
            'amount' => 'numeric|required',
            'type' => 'required|in:incomings,outgo',
        ]);

        $transaction = Transaction::create([
            "user_id" => 1,
            'title' => $request->title,
            'description' => $request->description,
            "date" => $request->date,
            "amount" => $request->amount,
            "type" => $request->type,
        ]);

        return response()->json([
            "transaction" => $transaction,
            "message" => "Transaction ajouté."
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(String $id)
    {
        $transaction = Transaction::find($id);
        return response()->json([
            "transaction" => $transaction,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, String $id)
    {
        $request->validate([
            'title' => 'string|required',
            'description' => 'string|sometimes',
            'date' => 'date|sometimes',
            'amount' => 'numeric|sometimes',
            'type' => 'sometimes|in:incomings,outgo',
        ]);

        $transaction = Transaction::findOrFail($id);
        $transaction->update($request->all());

        return response()->json([
            "transaction" => $transaction,
            "message" => "transaction modifié .",
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id)
    {
        $transaction = Transaction::find($id);
        $transaction->delete();

        return response()->json([
            "message" => "Transaction supprimé ."
        ], 200);
    }
}
