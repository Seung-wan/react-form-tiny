import { createRef, useCallback, useRef } from 'react';
import type { RefObject } from 'react';

type InputRefs = {
  name: string;
  ref: RefObject<HTMLInputElement>;
};

export function useForm() {
  const refs = useRef<InputRefs[]>([]);

  const getFields = () => {
    const obj: Record<string, unknown> = {};

    refs.current.forEach((ref) => (obj[ref.name] = ref.ref.current?.value));

    return obj;
  };

  const init = useCallback((name: string) => {
    const ref = createRef<HTMLInputElement>();

    refs.current?.push({ name, ref });

    return {
      ref,
    };
  }, []);

  return {
    init,
    formState: { getFields },
  };
}
