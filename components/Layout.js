import NavBar from "./NavBar";
// children : 하나의 컴포넌트를 다른 컴포넌트 안에 넣을 때 사용
export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
}
