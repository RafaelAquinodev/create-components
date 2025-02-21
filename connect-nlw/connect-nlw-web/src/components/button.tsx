interface ButtonProps {
  teste: string;
}

export function Button(props: ButtonProps) {
  return (
    <button className="bg-violet-500 px-5 py-2 rounded-sn">
      {props.teste}
    </button>
  );
}
