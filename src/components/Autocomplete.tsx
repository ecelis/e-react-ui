import * as React from 'react';
import { useState } from 'react';
import * as PropTypes from 'prop-types';

export declare interface IAutocomplete {
    items: string[];
    label: string;
    // TODO    handler?: Function
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare interface IState {
    activeSuggestion: number;
    filteredSuggestions?: string[];
    showSuggestions: boolean;
    userInput?: string;
}

export default function Autocomplete(
    { items, label, onChange }: IAutocomplete
    ): JSX.Element {
    const [state, setState] = useState<IState | null>({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        userInput: ''
    } as IState);

    const onChangeHandler = e => {
        const userInput = e.currentTarget.value;
        const filteredSuggestions = items.filter(
            suggestion => {
                return suggestion.toLowerCase()
                    .indexOf(userInput.toLowerCase()) > -1
            }
        );
        setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value,
        });
    };

    const onClick = e => {
        setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText,
        });
    };

    const onKeyDown = e => {  // TODO review ts-ignore lines
        //const { activeSuggestion, filteredSuggestions } = state;
        if (e.keyCode === 13) {
            const userInput = e.currentTarget.value;
            const filteredSuggestions = items.filter(
                suggestion => {
                    return suggestion.toLowerCase()
                        .indexOf(userInput.toLowerCase()) > -1
                }
            );
            setState({
                activeSuggestion: 0,
                filteredSuggestions,
                showSuggestions: true,
                userInput: state?.filteredSuggestions?[state.activeSuggestion]
            });
        } else if (e.keyCode === 38) {
            if (state?.activeSuggestion === 0) { return };
            // @ts-ignore
            setState({ ...state, ...{activeSuggestion: state?.activeSuggestion - 1} });
        } else if (e.keyCode === 40) {
            // @ts-ignore
            if (state?.activeSuggestion - 1 === state?.filteredSuggestions.length) {
                return;
            }
            // @ts-ignore
            setState({ activeSuggestion: state?.activeSuggestion + 1 })
        }
    }

    let suggestionsListComponent;
    if (state?.showSuggestions && state.userInput) {
        // @ts-ignore
        if (state.filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className='suggestions'>
                    {state?.filteredSuggestions?.map((suggestion, index) => {
                        let className;
                        if (index === state.activeSuggestion) {
                            className = 'suggestion-active';
                        }
                        return (
                            <li className={className}
                                key={suggestion}
                                onClick={onClick}>{suggestion}</li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className='no-suggestions'>
                    <em>No suggestions available.</em>
                </div>
            );
        }
    }

    return (
        <React.Fragment>
            <input
                type="text"
                onChange={onChangeHandler}
                onKeyDown={onKeyDown}
                value={state?.userInput}
                placeholder={label}
            />
            {suggestionsListComponent}
        </React.Fragment>);
}

Autocomplete.propTypes = {
    label: PropTypes.string,
    items: PropTypes.array.isRequired,
    handler: PropTypes.func
}
