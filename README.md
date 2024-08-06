# react-form-tiny

react-form-tiny는 React를 사용하여 Form을 다루는데 필요한 기능들을 제공합니다.

## Installation

```bash
> npm install react-form-tiny
```

## Example

```tsx
import { useForm } from 'react-form-tiny';

function FormComponent() {
  const {
    init,
    formState: { getFields },
  } = useForm();

  const handleSubmit = () => {
    const formFields = getFields();

    console.log(formFields); // { name: '' }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...init('name')} />
    </form>
  );
}
```

## API

- useForm
  - form을 다루기 위하여 다양한 옵션을 제공합니다.
  - init
  - formState
    - getFields

## License

MIT
