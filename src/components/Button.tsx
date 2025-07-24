import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode,
  type: 'add' | 'sub' | 'reset',
  className: string,
  setCount: React.Dispatch<React.SetStateAction<number>>,
  limit?: boolean
}

export default function Button({ children, type, className, setCount, limit }: ButtonProps) {
  const canDissable = type === 'add' || type === 'sub';

  function handleClick(event) {
    setCount((prev) => {
      switch (type) {
        case 'add': {
          const newValue = prev + 1
          return newValue
        }

        case 'sub': {
          const newValue = prev - 1
          if (newValue < 0) return 0
          return newValue
        }

        case 'reset': {
          return 0
        }
      }
    })

    event.currentTarget.blur()
  }

  return (
    <button className={className} disabled={limit && canDissable} onClick={handleClick}>{children}</button>
  )
}

