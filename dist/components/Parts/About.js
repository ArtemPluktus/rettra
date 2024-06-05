import React from 'react';
import './styles/About.module.css';
const aboutItems = [
    {
        title: 'Lorem Ipsum',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title: 'Lorem Ipsum',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title: 'Lorem Ipsum',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        title: 'Lorem Ipsum',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];
export const About = () => {
    return (React.createElement("section", { id: "About", className: "about" },
        React.createElement("h2", { className: "about__title" }, "About us"),
        React.createElement("ul", { className: "about__title" }, aboutItems.map((item, index) => (React.createElement("li", { key: index, className: "about__list__item" },
            React.createElement("h2", { className: "about__list__title" }, item.title),
            React.createElement("p", { className: "about__list__text" }, item.text),
            React.createElement("ul", { className: "about__list__link" },
                React.createElement("li", { className: "about__link__item" },
                    React.createElement("a", { href: "/", className: "about__link__learn" }, "Learn More")),
                React.createElement("li", { className: "about__link__item" },
                    React.createElement("a", { href: "/", className: "about__link__enquire" }, "Enquire Now")))))))));
};
//# sourceMappingURL=About.js.map