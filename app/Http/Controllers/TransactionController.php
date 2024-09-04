<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use OpenApi\Annotations as OA;

/**
 * @OA\Tag(
 *     name="Transactions",
 *     description="API Endpoints for managing user transactions"
 * )
 */
class TransactionController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/transactions",
     *     tags={"Transactions"},
     *     summary="Get list of all transactions",
     *     description="Retrieve all transactions in the system",
     *     operationId="getTransactions",
     *     @OA\Response(
     *         response=200,
     *         description="List of transactions",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Transaction")
     *         )
     *     )
     * )
     */
    public function index()
    {
        $transactions = Transaction::all();

        return response()->json([
            "transactions" => $transactions
        ], 200);
    }

    /**
     * @OA\Post(
     *     path="/api/transactions",
     *     tags={"Transactions"},
     *     summary="Create a new transaction",
     *     description="Create a new transaction for the authenticated user",
     *     operationId="createTransaction",
     *     security={{"sanctum":{}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title", "amount", "type"},
     *             @OA\Property(property="title", type="string", example="Vente produit"),
     *             @OA\Property(property="description", type="string", example="Vente de produit électronique"),
     *             @OA\Property(property="date", type="string", format="date", example="2024-09-01"),
     *             @OA\Property(property="amount", type="number", format="float", example=150.75),
     *             @OA\Property(property="type", type="string", example="incomings")
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Transaction created successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Transaction")
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation errors"
     *     )
     * )
     */
    public function store(Request $request)
    {
        $user = Auth::user();

        $request->validate([
            'title' => 'string|required',
            'description' => 'string|sometimes',
            'date' => 'date|sometimes',
            'amount' => 'numeric|required',
            'type' => 'required|in:incomings,outgo',
        ]);

        $transaction = Transaction::create([
            "user_id" => $user->id,
            'title' => $request->title,
            'description' => $request->description,
            "date" => $request->date,
            "amount" => $request->amount,
            "type" => $request->type,
        ]);

        return response()->json([
            "transaction" => $transaction,
            "message" => "Transaction ajoutée."
        ], 201);
    }

    /**
     * @OA\Get(
     *     path="/api/transactions/{id}",
     *     tags={"Transactions"},
     *     summary="Get a specific transaction",
     *     description="Retrieve a transaction by its ID",
     *     operationId="getTransactionById",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the transaction",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Transaction retrieved",
     *         @OA\JsonContent(ref="#/components/schemas/Transaction")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Transaction not found"
     *     )
     * )
     */
    public function show(String $id)
    {
        $transaction = Transaction::find($id);
        return response()->json([
            "transaction" => $transaction,
        ], 200);
    }

    /**
     * @OA\Put(
     *     path="/api/transactions/{id}",
     *     tags={"Transactions"},
     *     summary="Update a transaction",
     *     description="Update an existing transaction",
     *     operationId="updateTransaction",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the transaction",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"title", "amount"},
     *             @OA\Property(property="title", type="string", example="Achat produit"),
     *             @OA\Property(property="description", type="string", example="Achat de produit électronique"),
     *             @OA\Property(property="date", type="string", format="date", example="2024-09-01"),
     *             @OA\Property(property="amount", type="number", format="float", example=100.50),
     *             @OA\Property(property="type", type="string", example="outgo")
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Transaction updated successfully",
     *         @OA\JsonContent(ref="#/components/schemas/Transaction")
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Transaction not found"
     *     )
     * )
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
            "message" => "Transaction modifiée.",
        ], 200);
    }

    /**
     * @OA\Delete(
     *     path="/api/transactions/{id}",
     *     tags={"Transactions"},
     *     summary="Delete a transaction",
     *     description="Delete a specific transaction by its ID",
     *     operationId="deleteTransaction",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the transaction",
     *         required=true,
     *         @OA\Schema(type="integer", example=1)
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Transaction deleted successfully"
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Transaction not found"
     *     )
     * )
     */
    public function destroy(String $id)
    {
        $transaction = Transaction::find($id);
        $transaction->delete();

        return response()->json([
            "message" => "Transaction supprimée."
        ], 200);
    }
}
