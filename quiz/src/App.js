import React,{ useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBListGroup, MDBBtn } from "mdb-react-ui-kit";
import './App.css';
import Quiz from "./components/Quiz";
import { data } from "./components/Data";
import { moneyPramid } from "./components/Data";
import Timer from "./components/Timer";
import Start from "./components/Start";
import ReactConfetti from "react-confetti";

function App() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  // useffect for earn the money
  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPramid.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  return (
    <div className="App">
      {!name?(<Start setName={setName} setTimeOut={setTimeOut}/>):(
       <MDBRow>
       <MDBCol md="9">
         <div className="main">
           {timeOut?(
           <div>
            <ReactConfetti/>
            <h1 className="earned">Congratulations <strong>{name}</strong> you earned  <strong>{earned}</strong></h1>
            </div>):(
            <>
             <div style={{height:"50%" , position: "relative"}}>
              {/* display the name  */}
              <h1 className="userName">Hello <strong>{name}</strong> , Welcome to KBA Game</h1>
             <div className="timer">
             <Timer
               setTimeOut={setTimeOut}
               questionNumber={questionNumber}
             />
             </div>
           </div>
         <div style={{height:"50%"}}>
         <Quiz
         data={data}
         questionNumber={questionNumber}
         setQuestionNumber={setQuestionNumber}
         setTimeOut={setTimeOut}
         />
         </div>  
        </>
          )}
         </div>
       </MDBCol>
       <MDBCol md="3" className="money">
         <MDBListGroup className="money-list">
         <MDBRow>
                <span className="mb-2">
                  <MDBBtn
                    style={{ float: "right"  , color:"black"}}
                    className="mx-2"
                    color="light"
                    onClick={() => setTimeOut(true)}
                  >
                    Quit
                  </MDBBtn>
                  <MDBBtn
                    style={{ float: "left" }}
                    onClick={() => {
                      setName(null);
                      setQuestionNumber(1);
                      setEarned("₹ 0");
                    }}
                  >
                    Exit
                  </MDBBtn>
                </span>
                <MDBCol md="6">Name: {name}</MDBCol>
                <MDBCol md="6">Total Earned: {earned}</MDBCol>
              </MDBRow>
              <hr />
         {moneyPramid.map((item) => (
               <>
                 <li
                   className={
                     questionNumber === item.id ? "item active" : "item"
                   }
                 >
                   <h5 className="amount">{item.amount}</h5>
                 </li>
               </>
             ))}
         </MDBListGroup>
       </MDBCol>
     </MDBRow>
      )}  
    </div>
  );
}

export default App;










