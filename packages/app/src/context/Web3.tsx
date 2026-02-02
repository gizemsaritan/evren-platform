'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { WagmiProvider, type Config } from 'wagmi'
import { cookieToInitialState } from 'wagmi'
import { WALLETCONNECT_ADAPTER } from '@/utils/web3'

interface Props extends PropsWithChildren {
  cookies?: string | null
}

export function Web3Provider(props: Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    useEffect(() => {
  createAppKit({
    adapters: [WALLETCONNECT_ADAPTER],
    projectId: WALLETCONNECT_PROJECT_ID,
    networks: [mainnet, ...ETH_CHAINS],
    defaultNetwork: mainnet,
    metadata: {
      name: SITE_NAME,
      description: SITE_INFO,
      url: SITE_URL,
      icons: ['https://avatars.githubusercontent.com/u/25974464'],
    },
    features: {
      analytics: true,
      email: true,
      onramp: true,
    },
  })
}, [])
    setMounted(true)
  }, [])

  if (!mounted) return null

  const initialState = props.cookies
    ? cookieToInitialState(
        WALLETCONNECT_ADAPTER.wagmiConfig as Config,
        props.cookies
      )
    : undefined

  return (
    <WagmiProvider
      config={WALLETCONNECT_ADAPTER.wagmiConfig as Config}
      initialState={initialState}
    >
      {props.children}
    </WagmiProvider>
  )
}
