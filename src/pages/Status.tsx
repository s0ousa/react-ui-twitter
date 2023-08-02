import { FormEvent, useState, KeyboardEvent } from 'react'
import Header from '../components/Header'
import Separator from '../components/Separator'
import { Tweet } from '../components/Tweet'
import './Status.css'
import { PaperPlaneRight } from 'phosphor-react'



export function Status() {
    const [newAnswer, setNewAnswer] = useState('');
    const [answers, setAnswers] = useState([
        "Concordo...",
        "Uauuuuuuu",
        "Parabéns, cara!"
    ])

    function createNewAnswer(event: FormEvent) {
        event.preventDefault();

        setAnswers([...answers, newAnswer])
        setNewAnswer('')
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setAnswers([...answers, newAnswer])
            setNewAnswer('')
        }
    }



    return (
        <main className="status">

            <Header title='Tweet' />
            <Tweet content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nam exercitationem at ipsam quidem fugit distinctio harum a, voluptas vitae explicabo fugiat veritatis officiis possimus dignissimos. Deleniti dolorum unde aliquid?
'/>
            <Separator />
            <form onSubmit={createNewAnswer}
                className="answer-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/s0ousa.png" alt="Diego Fernandes" />
                    <textarea
                        id="tweet"
                        placeholder='Tweet your answer'
                        value={newAnswer}
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {
                            setNewAnswer(event.target.value)
                        }} />
                </label>
                <button type='submit'>
                    <PaperPlaneRight />
                    <span>Answer</span>
                </button>
            </form>


            {
                answers.map(answer => {
                    return <Tweet key={answer} content={answer} />
                })
            }


        </main>
    )
}