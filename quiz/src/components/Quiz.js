import React from 'react'
import { useEffect , useState } from 'react'
import useSound from "use-sound";
import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";


const Quiz = ({ data, questionNumber, setQuestionNumber, setTimeOut }) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const[correctAnswer] = useSound(correct);
    const[wrongAnswer] = useSound(wrong);
    const[letsPlay] = useSound(play);

    // number of the question
    useEffect(() => {
        setQuestion(data[questionNumber - 1]);
      }, [data, questionNumber]);

      // if user play the game then play sound come
      useEffect(() => {
        letsPlay();
      }, [letsPlay]);

   //for check the answer
  //for delay after clicking the option
  //custom function i made
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };


    const handleClick=(item)=>{
        setSelectedAnswer(item);
        setClassName("answer active");
        // setTimeOut(()=>{
        //     setClassName(item.correct? "answer correct" : "answer wrong")
        // }, 3000);
        delay(3000,()=>{
            setClassName(item.correct? "answer correct" : "answer wrong") 
        })
        delay(5000,()=>{
            if(item.correct){
                correctAnswer();
                delay(1000,()=>{
                    setQuestionNumber((prev)=>prev + 1 );
                    setSelectedAnswer(null);
                })
            }else{
                wrongAnswer();
                delay(1000, () => {
                    setTimeOut(true);
                });
            }
        })
    }
  return (
    <div className='quiz'>
        <div className="question">
         {question?.question}
        </div>
        <div className="answers">
            {question?.answers.map((item)=>(
                <div className={selectedAnswer === item ? className : "answer"} 
                onClick={() =>handleClick(item)}>
                {item.text}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Quiz
