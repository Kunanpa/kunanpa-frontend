import { ReactNode } from 'react'
type Props = {
    children: ReactNode
}
export function LayoutMock({ children }: Props) {
    return <div>{children}</div>
}
