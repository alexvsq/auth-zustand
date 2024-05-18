import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAllowed: boolean;
  children?: React.ReactNode;
}

const ProtectedRoutes = ({ isAllowed, children }: Props) => {
  if (!isAllowed) return <Navigate to="/login" />;
  return children ? <>children</> : <Outlet />;
};

export default ProtectedRoutes;
