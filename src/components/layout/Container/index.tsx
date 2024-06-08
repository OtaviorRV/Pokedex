import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}
export const Container: React.FC<IContainer> = ({ children }) => {
  return (
    <div className=" px-4 py-4 w-screen h-screen">
      {children}
    </div>
  )
}
