import { createRef, useState } from 'react';
import type { RefObject } from 'react';

type InputRefs = RefObject<HTMLInputElement>;

type State = {
  [key in string]: {
    ref: InputRefs;
  };
};

export function useForm() {
  const [state, setState] = useState<State>({});

  const getFields = () => {
    const values: Record<string, any> = {};

    Object.keys(state).forEach((key) => {
      values[key] = state[key].ref;
    });
  };

  const init = (name: string) => {
    const ref = createRef<HTMLInputElement>();

    setState((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        ref,
      },
    }));

    return {
      ref,
    };
  };

  return {
    init,
    formState: { getFields },
  };
}
