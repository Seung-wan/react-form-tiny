import type { RefObject } from 'react';
export declare function useForm(): {
    init: (name: string) => {
        ref: RefObject<HTMLInputElement>;
    };
    formState: {
        getFields: () => Record<string, unknown>;
    };
};
