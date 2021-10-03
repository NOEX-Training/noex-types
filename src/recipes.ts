import { Asset } from './files';
import { DocumentReference } from '@firebase/firestore-types';
export interface Ingredient {
    key: string;
    value: {
        carbohydrate: number;
        fiber: number;
        nameEN: string;
        nameHU: string;
        protein: number;
        totalAmount?: number;
        fat: number;
        uid: string;
    }
}

export interface Recipe {
    categories: Array<'breakfast' | 'protein_sources' | 'sides_ch_sources' | 'snacks'>
    creationDate: {
        nanoseconds: number;
        seconds: number
    };
    descriptionEN: string;
    descriptionHU: string;
    greenIngredients?: Ingredient[] | []
    mainIngredients?: Ingredient[] | []
    recipeHeaderUrls: Asset,
    secondaryIngredients?: Ingredient[] | []
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