---
title: Snackbar
---

# Snackbar

## Snackbars show short updates about app processes at the bottom of the screen

# Usage

<usage name="snackbar"></usage>

```jsx
import { Snackbar } from 'actify'

export default () => {
  return (
    <div className="w-fit space-y-2 pt-4">
      <Snackbar>Single-line snackbar</Snackbar>
      <Snackbar color="secondary" action="Action">
        Single-line snackbar with action
      </Snackbar>
      <Snackbar color="tertiary">Two-line snackbar without action Two-line snackbar without action</Snackbar>
      <Snackbar action="action">Two-line snackbar with action Two-line snackbar with action</Snackbar>
      <Snackbar action="warning" icon="X">
        Two-line snackbar with action Two-line snackbar with action
      </Snackbar>
      <Snackbar color="error">error</Snackbar>
      <Snackbar color="primary" icon="X" longaction="Longer action">
        <p>Two-line snackbar with success</p>
        <p>with longer action</p>
      </Snackbar>
    </div>
  )
}
```