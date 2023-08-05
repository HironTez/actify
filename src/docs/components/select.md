---
title: Select
---

# Select

## Select fields components are used for collecting user provided information from a list of options.

# Usage

<usage name="select"></usage>

```jsx
import { Select, SelectOption } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Select label="filled">
        <SelectOption value="apple" headline="Apple" selected />
        <SelectOption value="banana" headline="Banana" />
        <SelectOption value="kiwi" headline="Kiwi" />
        <SelectOption value="orange" headline="Orange" />
        <SelectOption value="tomato" headline="Tomato" />
      </Select>
      <Select label="outlined" variant="outlined" color="secondary">
        <SelectOption value="apple" headline="Apple" />
        <SelectOption value="banana" headline="Banana" />
        <SelectOption value="kiwi" headline="Kiwi" />
        <SelectOption value="orange" headline="Orange" />
        <SelectOption value="tomato" headline="Tomato" />
      </Select>
    </div>
  )
}
```