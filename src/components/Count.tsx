type CountProps = {
  count: number
}

export default function Count({ count }: CountProps) {

  return (
    <div className="count">{count}</div>
  )
}

