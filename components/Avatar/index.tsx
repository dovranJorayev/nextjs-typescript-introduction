import Image from "next/image";

function Avatar({className}: {className: string}): JSX.Element {
  return (
    <Image
      src="/images/avatar400x400.jpg"
      width="300"
      height="300"
      alt="avatar"
      className={className}
    />
  );
}

export default Avatar;