'use client'

import { Icon, IconButton } from 'actify'
import React, { useState } from 'react'

import { cn } from '@/utils/cn'
import { fira_code } from '@/app/fonts'
import { useMounted } from '@/hooks/useMounted'
import { useTheme } from 'next-themes'

const langs = ['shell', 'css', 'js', 'ts', 'jsx', 'tsx']
type Langs = (typeof langs)[number]

const SyntaxHighlighter = (props: React.ComponentProps<'div'>) => {
  const mounted = useMounted()
  const { theme, systemTheme } = useTheme()

  const { lang, children, className } = props
  const [code, setCode] = useState('')
  const [iconName, setIconName] = useState('content_copy')

  if (!mounted) {
    return null
  } else {
    const highlight = async () => {
      const { getHighlighter } = await import('shiki')
      const highlighter = await getHighlighter({
        langs,
        themes: ['catppuccin-latte', 'catppuccin-mocha']
      })

      const _code = highlighter.codeToHtml(children as string, {
        themes: {
          light: 'catppuccin-latte',
          dark: 'catppuccin-mocha',
          system:
            systemTheme == 'dark' ? 'catppuccin-mocha' : 'catppuccin-latte'
        },
        lang: lang as Langs,
        defaultColor: theme
      })
      setCode(_code)
    }

    highlight()
  }

  const copyCode = () => {
    navigator.clipboard.writeText(children as string).then(
      () => {
        setIconName('check')
        setTimeout(() => {
          setIconName('content_copy')
        }, 2000)
      },
      () => {
        setIconName('content_copy')
        setTimeout(() => {
          setIconName('copy')
        }, 2000)
      }
    )
  }

  return (
    <div
      className={cn(
        fira_code.variable,
        ['group', 'relative', 'rounded-lg', 'shadow-lg', 'overflow-hidden'],
        className
      )}
    >
      <div className="absolute top-3 right-6 cursor-pointer opacity-0 transition-opacity group-hover:opacity-100">
        <IconButton variant="filled" onClick={copyCode} color="secondary">
          <Icon>{iconName}</Icon>
        </IconButton>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: code }}
        className="[&_code]:[fontFamily:var(--font-fira-code)] [&_code]:block [&_code]:w-full overflow-x-hidden max-h-72 [&_pre]:p-4 [&_pre]:!my-0"
      />
    </div>
  )
}

export default SyntaxHighlighter
