import { Button, Box } from '@mui/material'
import React from 'react'

const ButtonSDK = ({
    content, style, sx, className, disabled,handleClick, id,variant="contained", ...props
}) => {
  return (
    <Button
    id={id}
    variant={variant}
    // eslint-disable-next-line
    children={content}
    sx={sx}
    style={style}
    onClick={handleClick}
    className={className}
    disabled={disabled}
    {...props}
  >
    <Box id={id} >
      {content}
    </Box>
  </Button>
  )
}

export const MemoizedButton = React.memo(ButtonSDK)