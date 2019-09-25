import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'jdoe@gmail.com',
                phone: '0403 567 678'
            },
            {
                id: 2,
                name: 'Karen Williams',
                email: 'kwill@gmail.com',
                phone: '0456 864 543'
            },
            {
                id: 3,
                name: 'Henry Johnson',
                email: 'harryj@gmail.com',
                phone: '0476 374 583'
            }
        ]
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;
