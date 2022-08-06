import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Autocomplete (props) {
    const [state, setState] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ''
    });

    const onChange = e => {
        const { items } = props;
        const userInput = e.currentTarget.value;
        const filteredSuggestions = items.filter(
            suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
        setState({
            activeSuggestions: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
        });
    };

    const onClick = e => {
        setState({
            activeSuggestions: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText,
        });
    };

    const onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = state;
        if (e.keyCode === 13) {
            setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
              });
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) { return };
            setState({ activeSuggestion: activeSuggestion - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setState({ activeSuggestion: activeSuggestion + 1 })
        }
    }

    let suggestionsListComponent;
    if(state.showSuggestions && state.userInput) {
        if (state.filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className='suggestions'>
                    {state.filteredSuggestions.map((suggestion, index) => {
                        let className;
                        if(index === state.activeSuggestion) {
                            className = 'suggestion-active';
                        }
                        return (
                            <li className={className}
                            key={suggestion}
                            onCick={onClick}>{suggestion}</li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div class='no-suggestions'>
                    <em>No suggestions available.</em>
                </div>
            );
        }
    }

    return (
        <React.Fragment>
            <input
                type="text"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={state.userInput}
                placeholder={props.label}
                />
                {suggestionsListComponent}
        </React.Fragment>);
}

Autocomplete.propTypes = {
    label: PropTypes.string,
    items: PropTypes.array.isRequired,
    handler: PropTypes.func
}
