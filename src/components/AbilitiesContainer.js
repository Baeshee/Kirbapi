import React, { Component } from "react";
import { connect } from "react-redux";
import { changeAbilities } from "../actions";

import data from '../data/abilities.json';

import { motion } from 'framer-motion';

import AbilityCard from "./AbilityCard";
import "../styles/css/AbilitiesContainer.css";

const container = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.35,
            delayChildren: 0.75,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    },
}

class AbilitiesContainer extends Component {

    getAbilities = async () => {
        this.props.changeAbilities(data);
    }

    componentDidMount(){
        this.getAbilities();
    }

    render() {

        return(
            <article className="container">
                <motion.ul initial="hidden" animate="visible" variants={container} className="abilities_container">
                    {this.props.abilities.map((ability, index) => {
                        return(
                            <AbilityCard 
                                key={index} 
                                ability={ability.ability} 
                                image={ability.appearance_image} 
                                icon={ability.ability_icon} 
                                color={ability.ability_color}
                                />
                        )
                    })}
                </motion.ul>
            </article>
        )
        
    }
}


const mapStateToProps = state => {
    return { abilities: state.abilities, };
}

export default connect(
    mapStateToProps, {changeAbilities: changeAbilities,}
    )(AbilitiesContainer);