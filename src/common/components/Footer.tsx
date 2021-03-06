import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="container">
      <div className="footer">
        <div className="footer__developers">
          <div className="footer__developers__title">
            Разработчики
            <div className="footer__developers__image"></div>
          </div>
          <ul className="footer__developers__items">
            <li className="footer__developers__item">
              <a target="_blank" href="https://github.com/vsmaliakou" rel="noreferrer">
                vsmaliakou
              </a>
            </li>
            <li className="footer__developers__item">
              <a href="https://github.com/igrekinlapland" target="_blank" rel="noreferrer">
                igrekinlapland
              </a>
            </li>
            <li className="footer__developers__item">
              <a target="_blank" href="https://github.com/JohanL1bert" rel="noreferrer">
                JohanL1bert
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">@copyright 2022</div>
        <div className="footer__logo">
          <a href="https://rs.school/index.html" target="_blank" rel="noreferrer"></a>
        </div>
      </div>
    </footer>
  );
};
