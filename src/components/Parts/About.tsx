import React from 'react';
import './styles/About.module.css';



const aboutItems: { title: string;  text: string}[] = [
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

export const About: React.FC = () => {
  return (
    <section id="About" className="about">
      <h2 className="about__title">About us</h2>
      <ul className="about__title">
        {aboutItems.map((item, index) => (
          <li key={index} className="about__list__item">
            <h2 className="about__list__title">{item.title}</h2>
            <p className="about__list__text">{item.text}</p>
            <ul className="about__list__link">
              <li className="about__link__item">
                <a href="/" className="about__link__learn">
                  Learn More
                </a>
              </li>
              <li className="about__link__item">
                <a href="/" className="about__link__enquire">
                  Enquire Now
                </a>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
