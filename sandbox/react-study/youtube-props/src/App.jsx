import Student from "./Student";

function App() {
  console.log('test')
  return(
    <>
    <Student name="Spongebob" age='{30}' isStudent={true}/>
    <Student name="Patrick" age={42} isStudent={false}/>
    <Student name="SquidWard" age={50} isStudent={false}/>
    <Student name="Sandy" age={27} isStudent={true}/>
    <Student />
    </>
  )
};

export default App;
