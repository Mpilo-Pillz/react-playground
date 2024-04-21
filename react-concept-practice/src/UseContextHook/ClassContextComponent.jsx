import React, { Component } from "react"
import { ThemeContext } from "../App"
export default class ClassContextComponent extends Component {
    themeStyles(dark) {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black',
            padding: '2rem',
            margin: '2rem'
        }
    }
    render() {
        return (
            <div>
                <ThemeContext.Consumer>
                    {darkTheme => <div>{darkTheme ? 'Dark' : 'Light'}</div>}
                </ThemeContext.Consumer>
            </div>
        )
    }
}