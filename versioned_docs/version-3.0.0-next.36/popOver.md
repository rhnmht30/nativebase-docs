---
id: popOver
title: Popover
---

`Popover` is a non-modal dialog that floats around a trigger. It's used to display contextual information to the user, and should be paired with a pressable trigger element.

## Import

- `Popover`: The wrapper that provides props, state, and context to its children.
- `Popover.Trigger`: Used to wrap the reference (or trigger) element.
- `Popover.Content`: The popover itself.
- `Popover.Header`: The header of the popover.
- `Popover.Body`: The body of the popover.
- `Popover.CloseButton`: A button to close the popover.

```jsx
import { Popover } from 'native-base';
```

## Examples

### Basic

```SnackPlayer name=Popover%20Basic
import React from 'react';
import {
  Popover,
  Button,
  NativeBaseProvider,
  Center
} from 'native-base';

function PopoverComponent () {
  return (
    <Popover>
      <Popover.Trigger>
        <Button>Trigger</Button>
      </Popover.Trigger>
      <Popover.Content width={250}>
        <Popover.CloseButton />
        <Popover.Header>Confirmation!</Popover.Header>
        <Popover.Body>Are you sure you want to have that milkshake?</Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <PopoverComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### Size

```SnackPlayer name=Popover%20Size
import React from 'react';
import {
  Popover,
  Button,
  NativeBaseProvider,
  Center
} from 'native-base';

function PopoverComponent () {
  return (
    <Popover size="lg">
      <Popover.Trigger>
        <Button>Trigger for size</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Popover.CloseButton />
        <Popover.Header>Confirmation!</Popover.Header>
        <Popover.Body>Are you sure you want to have that milkshake?</Popover.Body>
      </Popover.Content>
    </Popover>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <PopoverComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

### initialFocusRef and closeOnBlur

```SnackPlayer name=Popover%20initialFocusRef%20and%20closeOnBlur
import React from 'react';
import {
  Popover,
  Button,
  Input,
  NativeBaseProvider,
  Center
} from 'native-base';

function PopoverComponent () {
  const initialFocusRef = React.useRef();
  return (
    <Popover initialFocusRef={initialFocusRef} closeOnBlur={false}>
      <Popover.Trigger>
        <Button>Trigger</Button>
      </Popover.Trigger>
      <Popover.Content width={250}>
        <Popover.CloseButton />
        <Popover.Header fontSize={20} fontWeight={700}>
          Header
        </Popover.Header>
        <Popover.Body>
          <Input
            mb={3}
            backgroundColor="white"
            ref={initialFocusRef}
            placeholder="I will get focused on Popover opening"
          />
          This Popover won't close on clicking outside the popover area.
        </Popover.Body>
        <Popover.Footer>This is the footer</Popover.Footer>
      </Popover.Content>
    </Popover>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <PopoverComponent />
      </Center>
    </NativeBaseProvider>
  );
}
```

:::tip Tip
You can pass custom backgroundColor using `bg` or `backgroundColor`, `borderColor` and `borderWidth` to Popover.
:::

## Props

| Name            | Type                                             | Description                                                               | Default |
| --------------- | ------------------------------------------------ | ------------------------------------------------------------------------- | ------- |
| onOpen          | function                                         | Callback fired when the popover opens.                                    | -       |
| onClose         | function                                         | Callback fired when the popover closes.                                   | -       |
| initialFocusRef | React.Ref                                        | The ref of the element that should receive focus when the popover opens.  | -       |
| finalFocusRef   | React.Ref                                        | The ref of the element that should receive focus when the popover closes. | -       |
| closeOnBlur     | boolean                                          | If true, the popover will close when you blur it out by pressing outside. | -       |
| id              | string                                           | The top-level id to use for the Popover and it's sub-components.          | -       |
| size            | `xs`, `sm`,`md`,`lg`,`xl`,`full`, number, string | Size of the Popover component.                                            | -       |

### Popover.Content

`Popover.Content` composes the [`Box`](box.md) component.

### Popover.Header

`Popover.Header` composes the [`Box`](box.md) component.

### Popover.Footer

`Popover.Footer` composes the [`Box`](box.md) component.

### Popover.Body

`Popover.Body` composes the [`Box`](box.md) component.

### Popover.CloseButton 

`Popover.CloseButton` composes the [`CloseButton`](closeButton.md) component.
