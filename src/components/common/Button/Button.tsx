import "./style.scss";

interface ButtonProps {
  bgColor: string;
  width?: number;
  children: string;
}

const Button = ({ bgColor, width, children }: ButtonProps) => {
  return (
    <button
      style={{
        background: bgColor,
        width,
      }}
      className="button"
    >
      {children}
    </button>
  );
};

export default Button;
