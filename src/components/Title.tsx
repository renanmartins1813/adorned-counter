type TitleProps = {
  limit: boolean
}
export default function Title({ limit }: TitleProps) {

  return (
    <h1 className="title">
      {limit ? (
        <span>
          You already got a really <b>nice</b> number, no need to changes.
        </span>
      )
        : `Edorned Counter`}
    </h1>
  );
}
