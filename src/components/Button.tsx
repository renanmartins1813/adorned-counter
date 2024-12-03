import { ReactNode } from "react"

type ButtonProps = {
  children: ReactNode,
  type: 'add' | 'sub' | 'reset',
  className: string,
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export default function Button({ children, type, className, setCount }: ButtonProps) {

  function handleClick() {
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
  }

  return (
    <button className={className} onClick={handleClick}>{children}</button>
  )
}

