import { Link } from "react-router-dom";

export const NavegationLink = ({
  path,
  text,
}: {
  path: string;
  text: string;
}) => {
  return (
    <Link to={path} style={{ textDecoration: "none", color: "white" }}>
      {text}
    </Link>
  );
};
