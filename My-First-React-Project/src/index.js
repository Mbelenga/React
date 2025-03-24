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
    <h1>About</h1>
    <p> Hello There <br/> How do you do? </p>
    </>
  );
}