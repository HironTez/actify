---
title: Floating action buttons
---

# Floating action buttons

## Floating action buttons (FABs) help people take primary actions

# Usage

<usage name="fab"></usage>

```jsx
import { Fab } from 'actify'

export default () => {
  return (
    <>
      <Fab color="error" icon="Home" />
      <Fab color="primary" label="ctify">
        <svg width="33.455" height="36.987" fill="#fff" viewBox="0 0 33.455 36.987" xmlns="http://www.w3.org/2000/svg">
          <path
            strokeWidth="2.5"
            stroke="currentColor"
            transform="translate(-28.272 365)"
            d="M55.047-328.513l-5.238-13.822-14.323,5.317-3.243,8.5H29L42.821-364.5h4.359L61-328.513Zm-6.067-15.969.829,2.147-.829-2.147-5.308-13.745-7.123,18.445"
          />
        </svg>
      </Fab>
    </>
  )
}
```