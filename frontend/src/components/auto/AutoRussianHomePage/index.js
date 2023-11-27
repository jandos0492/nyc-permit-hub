import React from "react";
import { Link } from "react-router-dom";

const AutoRussianHomePage = ({ language }) => {
    return (
        <div className="auto-home-page-container">
            <div className="auto-home-page">
                <Link to="/auto/ru/traffic-signs/learn" className="home-card grey">
                    <span>Изучите дорожные знаки</span>
                    <p className="card-description">
                        Изучите все необходимые дорожные знаки для прохождения теста на пермит в Нью-Йорке
                    </p>
                </Link>
                <Link to="/auto/ru/learn" className="home-card green">
                    <span>Подготовка</span>
                    <p className="card-description">
                        Изучите все вопросы и подготовтесь к тесту на получение водительского пермита в Нью-Йорке
                    </p>
                </Link>
                <Link to="/auto/ru/full-test" className="home-card yellow">
                    <span>Полный Тест</span>
                    <p className="card-description">
                        Пройдите тест по всем вопросам и получите результат
                    </p>
                </Link>
                <Link to="/auto/ru/express-test" className="home-card red">
                    <span>Быстрый Тест</span>
                    <p className="card-description">
                        Пройдите тест по 20 случайным вопросам, как в настоящем тесте
                    </p>
                </Link>
            </div>
        </div>
    );
};
export default AutoRussianHomePage;