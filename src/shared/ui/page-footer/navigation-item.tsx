import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import type { UrlObject } from 'url'

type NavigationItemProps = {
    title: string
    href: string | UrlObject
    newWindow?: boolean
}

export const NavigationItem: FC<NavigationItemProps> = ({ title, href, newWindow = false }) => (
    <Link
        href={href}
        className={clsx('block', 'text-xs font-medium', 'overflow-hidden', 'text-black hover:text-gray-600 active:text-gray-900')}
        target={newWindow ? '_blank' : undefined}
    >
        {title}
    </Link>
)
