import { Icon, IconButton, TextField } from 'actify'
import { MouseEvent, useState } from 'react'

export default () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setShowPassword((prev) => !prev)
  }

  return (
    <form className="grid gap-2 grid-cols-1 sm:grid-cols-2">
      <TextField
        label="Email"
        suffixText="@actifyjs.com"
        leadingIcon={<Icon>email</Icon>}
      />

      <TextField
        label="Password"
        variant="outlined"
        autoComplete="off"
        type={showPassword ? 'text' : 'password'}
        leadingIcon={<Icon>lock</Icon>}
        trailingIcon={
          <IconButton onClick={handleClick}>
            <Icon>{showPassword ? 'visibility_off' : 'visibility'}</Icon>
          </IconButton>
        }
      />
    </form>
  )
}
