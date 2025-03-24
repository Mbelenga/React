function MyButton() {
  return(
    <button> i'm a button </button>
  );
}
export default function MyApp() {
  return(
    <div>
    <h1> Welcome to my App </h1>
    <MyButton/>
    </div>
  );
}
function AboutPage() {
  return(
    <>
    <h1>How are you</h1>
    <p>How do you do <br/> Are you ok</p>
    </>
  );
}