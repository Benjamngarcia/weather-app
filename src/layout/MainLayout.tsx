import { ReactNode } from 'react';

type MyProps = {
  children?: ReactNode;
}

export function MainLayout(props: MyProps) {
  const { children } = props

  return (
    <header className="bg-sky-100 min-h-screen flex items-center dark:bg-stone-800">
      <div className="container-md mx-auto max-w-xl px-4 w-full">
        {children}
      </div>
    </header>
  )
}
