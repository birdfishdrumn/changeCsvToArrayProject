import React, {ReactNode, VFC} from 'react'

interface Props {
  children: ReactNode
}

const Layout:VFC<Props> = ({children}) => {
  return (
    <div className="mx-auto max-w-xl my-20">
      <div className="mx-4">{children}</div>
    </div>
  )
}

export default Layout
