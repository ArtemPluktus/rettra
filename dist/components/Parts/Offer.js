import React from 'react';
import './styles/Offer.module.css';
const offers = [
    'Business and other management consulting',
    'Other support activities for the provision of financial services',
    'Market research and public opinion research',
    'Activities of other HR organizations',
    'Comprehensive administrative and management services',
];
export const Offer = () => {
    return (React.createElement("section", { id: "Offer", className: "offer" },
        React.createElement("h2", { className: "offer__title" }, "Offers"),
        React.createElement("ul", { className: "offer__list" }, offers.map((offer, index) => (React.createElement("li", { key: index, className: "offer__list__item" },
            React.createElement("p", { className: "offer__list__text" }, offer)))))));
};
//# sourceMappingURL=Offer.js.map