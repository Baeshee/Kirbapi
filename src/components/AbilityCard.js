import React, { Component } from 'react';

import { motion } from 'framer-motion';

import '../styles/css/AbilitiesCard.css';

const card = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -150 },
}

class AbilityCard extends Component {
    color = { background: this.props.color }

    render() {
        return (
            <motion.li variants={card}>
                <section style={this.color} className="ability_card">
                    <section className="ability_card__front">
                        <img className="ability_card__icon" src={this.props.icon} alt={this.props.ability} />
                        <img className="ability_card__image" src={this.props.image} alt={this.props.ability} />
                        <h2>{this.props.ability}</h2>
                    </section>
                    <section className="ability_card__back">
                        <img className="ability_card__icon" src={this.props.icon} alt={this.props.ability} />
                    </section>
                </section>
            </motion.li>
        )
    }
}

export default AbilityCard;