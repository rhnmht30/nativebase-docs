---
id: spinner
title: Spinner
---

## Implements

- `ActivityIndicator` from react-native
- `color`

## Example

```SnackPlayer name=Spinner%20Usage
import React from 'react';
import { Spinner, NativeBaseProvider } from 'native-base';

function SpinnerComponent () {
  return <Spinner />;
}
export default function () {
  return (
    <NativeBaseProvider>
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Colors)

```SnackPlayer name=Spinner%20Example(colors)
import React from 'react';
import { Spinner, HStack, NativeBaseProvider } from 'native-base';

function SpinnerComponent () {
  return (
    <HStack space={2}>
      <Spinner color="danger.500" />
      <Spinner color="green.500" />
      <Spinner color="blue.500" />
      <Spinner color="warning.100" />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Sizes)

```SnackPlayer name=Spinner%20Example(Sizes)
import React from 'react';
import { Spinner, HStack, NativeBaseProvider } from 'native-base';

function SpinnerComponent () {
  return (
    <HStack space={3}>
      <Spinner size="sm" />
      <Spinner size="lg" />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Variant)

```SnackPlayer name=Spinner%20Example(Variant)
import React from 'react';
import { Spinner, HStack, Icon, NativeBaseProvider } from 'native-base';

function SpinnerComponent () {
  return (
   <HStack space={2}>
      <Spinner />
      <Spinner color="danger.400" variant="dotted" />
      <Spinner color="blue.500" variant="stroked" />
      <Spinner color="gray.900" variant="multiColorDotted" />
      <Spinner color="yellow.500" variant="squareDotted" />
      <Spinner
        variant="custom"
        renderProp={<Icon name="bat" type="MaterialCommunityIcons" size={12} />}
      />
    </HStack>
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Example (Duration)

```SnackPlayer name=Spinner%20Example(Duration)
import React from 'react';
import { Spinner, HStack, NativeBaseProvider } from 'native-base';

function SpinnerComponent () {
  return (
   <Spinner color="danger.400" variant="dotted" size="lg" duration={1000} />
  );
}
export default function () {
  return (
    <NativeBaseProvider>
      <SpinnerComponent />
    </NativeBaseProvider>
  );
}
```

## Props

| Name    | Type                                                              | Description                                           | Default |
| ------- | ----------------------------------------------------------------- | ----------------------------------------------------- | ------- |
| size    | `sm` , `lg` , `small` , `large`                                   | Applies box shadow and accepts a number from 0 to 9   | -       |
| style   | stylesheet                                                        | Applies user-defined styles and accepts a stylesheet. | -       |
| variant | 'custom', 'dotted', 'multiColorDotted', 'stroked', 'squareDotted' | Variant of spinner to use.                            | -       |

| duration | number | Time(in ms) for spinner to complete a rotation | 1900 |
| renderProp | JSX.Element | Manual component to be rendered as a Spinner | - |