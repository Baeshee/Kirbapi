import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from "./store";

import AbilitiesContainer from "./components/AbilitiesContainer";

import './styles/css/App.css'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <article>
                    <section className="information">
                        <h1>Kirby Abilities</h1>
                        <p>This is a collection of all Kirby abilities from the complete series. The first idea was to create a whole API system with all information about all the games but sadly my ambitions where a bit to big. So the progress that I made were transformed into this single collection of all the abilities and some information about them.</p>
                        <p className="check-me-out">Check me out at Github <a href="https://github.com/Baeshee">Baeshee</a> and if you want to see the code for this project, you can find it at <a href="https://github.com/Baeshee/Kirbapi">Github</a></p>
                    </section>
                    <AbilitiesContainer />
                </article>
            </Provider>
        )
    }
}

export default App;