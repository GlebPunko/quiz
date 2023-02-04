import React from "react";

class questions extends React.Component {
    static GetData() {
        return ( [
            {
                title: 'React - это ... ?',
                variants: ['библиотека', 'фреймворк', 'приложение'],
                correct: 0,
            },
            {
                title: 'Компонент - это ... ',
                variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
                correct: 1,
            },
            {
                title: 'Что такое JSX?',
                variants: [
                    'Это простой HTML',
                    'Это функция',
                    'Это тот же HTML, но с возможностью выполнять JS-код',
                ],
                correct: 2,
            },
            {
                title: 'Какая компания разработала React JS?',
                variants: [
                    'Amazon',
                    'Facebook',
                    'Twitter',
                ],
                correct: 1,
            },
            {
                title: 'От какого класса идет наследование всех компонентов?',
                variants: [
                    'React.Component',
                    'ComponentReact',
                    'ReactJS.Component',
                ],
                correct: 0,
            },
            {
                title: 'Где правильно выведен компонент через рендер?',
                variants: [
                    '<Test>',
                    '</Test>',
                    '<Text/>',
                ],
                correct: 2,
            },
            {
                title: 'Где правильно создан компонент?',
                variants: [
                    'class App extends React.Component ({})',
                    'class App {}',
                    'class App extends React.Component {}',
                ],
                correct: 2,
            },
            {
                title: 'Можно ли писать не используя Babel?',
                variants: [
                    'Да',
                    'Нет',
                    'Без него ничего не будет работать',
                ],
                correct: 0,
            },
            {
                title: 'Куда можно встроить готовый код из метода render()?',
                variants: [
                    'В любой тег',
                    'Только в div',
                    'Только в тег, у которого есть id',
                ],
                correct: 0,
            },
            {
                title: 'Как много компонентов может быть на сайте?',
                variants: [
                    'Максимум 100',
                    'Максимум 200',
                    'Неограниченное количество',
                ],
                correct: 2,
            },
        ])
    }
}

export default questions;