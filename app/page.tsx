import { Suspense, use } from "react";

const getDatePromise = () => {
  return  new Promise<Date>((resolve) => {
    setTimeout(() => {
      const now = new Date()
      resolve(new Date());
    }, 1_000)
  })
  
}
export const DatePromiseComponent = () => {
  const date = use<Date>(getDatePromise());

  return <div>{date.toDateString()}</div>
}

export default function Home() {
  return (
    <Suspense fallback={ <div>just a moment, please...</div>}>
      <DatePromiseComponent/>
    </Suspense>
  );
}
