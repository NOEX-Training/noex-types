import { Asset } from './files';
import { DocumentReference } from '@firebase/firestore-types';
export interface Ingredient {
    key: string;
    value: {
        carbohydrate: number;
        fiber_total_dietary: number;
        ingredient_code: string;
        ingredient_name: string;
        protein: number;
        total_amount?: number;
        total_fat: number;
        uid: string;
    }
}

export interface Recipe {
    categories: Array<'Breakfast' | 'Dinner' | 'Lunch'>
    creationDate: {
        nanoseconds: number;
        seconds: number
    };
    description: string;
    mainIngredients?: Ingredient[] | []
    recipeHeaderUrls: Asset,
    saladIngredients?: Ingredient[] | []
    sideIngredients?: Ingredient[] | []
    title: string
    trainer: {
        name: string
        teamReference: DocumentReference
        teamUid: string
        trainerReference: DocumentReference
        trainerUid: string
    },
    uid: string
}