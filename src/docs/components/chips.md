---
title: Chips
---

# Chips

## Chips help people enter information, make selections, filter content, or trigger actions

# Usage

<usage name="chips"></usage>

```jsx
import { Chip } from 'actify'

export default () => {
  return (
    <div className="flex gap-2">
      <Chip label="Ramp access" />
      <Chip type="filter" label="filter" />
      <Chip type="input" label="input" />
      <Chip type="suggestion" label="Suggestion" />
    </div>
  )
}
```