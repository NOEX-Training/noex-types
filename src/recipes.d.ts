import { Asset } from './files';
import { DocumentReference } from '@firebase/firestore-types';
export interface Ingredient {
    key: string;
    value: {
        carbohydrate: number;
        fat: number;
        fiber: number;
        /**
         * @description
         * Only in shoppingCart.
         */
        isChecked?: boolean;
        nameEN: string;
        nameHU: string;
        /**
         * Only in shoppingCart.
         */
        portion?: number;
        protein: number;
        /**
         * @description
         * Only in shoppingCart.
         */
        recipeUid?: string;
        totalAmount?: number;
        uid: string;
    };
}
export interface Recipe {
    categories: Array<'breakfast' | 'protein_source' | 'sides_ch_source' | 'snack'>;
    creationDate: {
        nanoseconds: number;
        seconds: number;
    };
    descriptionEN: string;
    /**
     * @description
     * Not only yet.
     */
    descriptionHU?: string;
    dietaryInfo: string[];
    greenIngredients?: Ingredient[] | [];
    likes: string[];
    mainIngredients?: Ingredient[] | [];
    recipeHeaderUrls: Asset;
    secondaryIngredients?: Ingredient[] | [];
    tags?: string[];
    titleEN: string;
    titleHU?: string;
    trainer?: {
        name: string;
        teamReference: DocumentReference;
        teamUid: string;
        trainerReference: DocumentReference;
        trainerUid: string;
    };
    uid: string;
}
