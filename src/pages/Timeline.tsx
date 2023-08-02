import { FormEvent, useState, KeyboardEvent } from "react"
import Header from "../components/Header"
import Separator from "../components/Separator"
import { Tweet } from "../components/Tweet"



import './Timeline.css'

export function Timeline() {
    const [newTweet, setNewTweet] = useState('');
    const [tweets, setTweets] = useState([
        "bilubilu",
        "123456",
        "adasda"
    ])

    function createNewTweet(event: FormEvent) {
        event.preventDefault();
        console.log(newTweet);

        setTweets([...tweets, newTweet])
        setNewTweet('')
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
            setTweets([...tweets, newTweet])
            setNewTweet('')
        }
    }

    return (
        <main className="timeline">

            <Header title='Home' />

            <form onSubmit={createNewTweet} className="new-tweet-form">
                <label htmlFor="tweet">
                    <img src="https://github.com/s0ousa.png" alt="Luisss" />
                    <textarea
                        id="tweet"
                        placeholder='O que tá pegando?'
                        onKeyDown={handleHotKeySubmit}
                        onChange={(event) => {
                            setNewTweet(event.target.value)
                        }}
                    />
                </label>
                <button type='submit'>Tweet</button>
            </form>

            <Separator />

            {
                tweets.map(tweet => {
                    return <Tweet key={tweet} content={tweet} />
                })
            }

        </main>

    )

}
