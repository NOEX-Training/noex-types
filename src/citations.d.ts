declare module 'noex-types' {
    namespace NOEXTypes {
        
        export interface Citation {
            creationDate: {
                nanoseconds: number;
                seconds: number;
            };
            citation: string;
            citationEn: string;
            uid: string;
        }
    }
}