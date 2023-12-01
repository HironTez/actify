'use client'

import { tv, VariantProps } from 'tailwind-variants'
import { AccordionContext } from '../AccordionContext'

import React, {
  useContext,
  forwardRef,
  cloneElement,
  isValidElement
} from 'react'

const variants = tv({
  base: 'transition-all duration-300 ease-in-out grid',
  variants: {
    open: {
      true: 'grid-rows-[1fr]',
      false: 'grid-rows-[0fr]',
      undefined: 'grid-rows-[0fr]'
    }
  }
})

interface AccordionContentProps
  extends VariantProps<typeof variants>,
    React.HTMLAttributes<HTMLDivElement> {
  index: number
  asChild?: boolean
  children: React.ReactNode
}

const AccordionContent: React.FC<AccordionContentProps> = forwardRef(
  (props, ref?: React.Ref<HTMLDivElement>) => {
    const { index, style, className, asChild, children, ...rest } = props
    const { open } = useContext(AccordionContext)

    // `asChild` allows the user to pass any element as the content
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        ref,
        ...rest,
        ...children.props,
        className: variants({ className: children.props.className })
      })
    }

    return (
      <div
        {...rest}
        ref={ref}
        style={style}
        className={variants({ className, open: open[index] })}
      >
        <p className="overflow-hidden">{children}</p>
      </div>
    )
  }
)

export { AccordionContent }