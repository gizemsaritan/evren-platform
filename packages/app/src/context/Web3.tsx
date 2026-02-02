'use client'

import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
  cookies?: string | null
}

export function Web3Provider({ children }: Props) {
  return <>{children}</>
}
