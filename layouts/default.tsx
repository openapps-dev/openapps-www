export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1>Welcome to openapps</h1>
      {children}
    </>
  );
}
