<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @OA\Schema(
 *     schema="Transaction",
 *     type="object",
 *     title="Transaction",
 *     description="Modèle représentant une transaction financière",
 *     properties={
 *         @OA\Property(property="id", type="string", description="Identifiant unique de la transaction"),
 *         @OA\Property(property="user_id", type="integer", description="Identifiant de l'utilisateur associé à la transaction"),
 *         @OA\Property(property="title", type="string", description="Titre de la transaction"),
 *         @OA\Property(property="description", type="string", nullable=true, description="Description de la transaction"),
 *         @OA\Property(property="amount", type="number", description="Montant de la transaction"),
 *         @OA\Property(property="type", type="string", enum={"incomings", "outgo"}, description="Type de transaction, soit 'incomings' (entrées) soit 'outgo' (sorties)"),
 *         @OA\Property(property="date", type="string", format="date", description="Date de la transaction"),
 *         @OA\Property(property="created_at", type="string", format="date-time", description="Date de création de l'enregistrement"),
 *         @OA\Property(property="updated_at", type="string", format="date-time", description="Date de la dernière mise à jour de l'enregistrement")
 *     }
 * )
 */
class Transaction extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'description',
        'amount',
        'type',
        'date',
    ];
}
