import { ReactNode } from 'react'
export const Page = ({
	children,
	className,
}: {
	children: ReactNode
	className?: string
}) => (
	<div className={`${className} min-h-[100vh] min-w-full gap-[1.25rem] container flex flex-col grow pb-[5rem]`}>
		{children}
	</div>
)
