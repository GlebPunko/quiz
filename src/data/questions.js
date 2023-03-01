import React from "react";

class questions extends React.Component {
    static GetData() {
        return ( [
            {
                title: 'React - is ... ?',
                variants: ['library', 'framework', 'application'],
                correct: 0,
            },
            {
                title: 'Component - is ... ',
                variants: ['application', 'piece of application or side', 'what I don`t know what is'],
                correct: 1,
            },
            {
                title: 'What`s JSX?',
                variants: [
                    'This is plain HTML',
                    'It`s function',
                    'This is the same HTML, but with the ability to execute JS code',
                ],
                correct: 2,
            },
            {
                title: 'Which company developed React JS?',
                variants: [
                    'Amazon',
                    'Facebook',
                    'Twitter',
                ],
                correct: 1,
            },
            {
                title: 'What class does all components inherit from?',
                variants: [
                    'React.Component',
                    'ComponentReact',
                    'ReactJS.Component',
                ],
                correct: 0,
            },
            {
                title: 'Where is the component rendered correctly?',
                variants: [
                    '<Test>',
                    '</Test>',
                    '<Text/>',
                ],
                correct: 2,
            },
            {
                title: 'Where is the component created correctly?',
                variants: [
                    'class App extends React.Component ({})',
                    'class App {}',
                    'class App extends React.Component {}',
                ],
                correct: 2,
            },
            {
                title: 'Is it possible to write without using Babel?',
                variants: [
                    'Yes',
                    'No',
                    'Nothing will work without it',
                ],
                correct: 0,
            },
            {
                title: 'Where can I embed ready-made code from the render() method?',
                variants: [
                    'To any tag',
                    'Only in div',
                    'Only in tag which have id',
                ],
                correct: 0,
            },
            {
                title: 'How many components can be on a site?',
                variants: [
                    'Maximum 100',
                    'Maximum 200',
                    'Unlimited amount',
                ],
                correct: 2,
            },
        ])
    }
}

export default questions;