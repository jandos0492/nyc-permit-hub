import React from "react";
import { Link } from "react-router-dom";

const AutoRussianHomePage = ({ language }) => {
    return (
        <div className="auto-home-page-container">
            <h1 className="header">Авто: Русская Версия</h1>
            <div className="auto-home-page">
                <Link to="/auto/ru/traffic-signs/learn" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/learn-traffic-signs.jpg`}
                        alt="Learn Traffic Signs"
                        className="card-image"
                    />
                    <span>Изучите дорожные знаки</span>
                    <p className="card-description">
                        Изучите все необходимые дорожные знаки для прохождения теста на пермит в Нью-Йорке
                    </p>
                </Link>
                <Link to="/auto/ru/learn" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/learn.jpg`}
                        alt="Learn all questions"
                        className="card-image"
                    />
                    <span>Подготовка</span>
                    <p className="card-description">
                        Изучите все вопросы и подготовтесь к тесту на получение водительского пермита в Нью-Йорке
                    </p>
                </Link>
                <Link to="/auto/ru/full-test" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/full-test.jpg`}
                        alt="Full test"
                        className="card-image"
                    />
                    <span>Полный Тест</span>
                    <p className="card-description">
                        Пройдите тест по всем вопросам и получите результат
                    </p>
                </Link>
                <Link to="/auto/ru/express-test" className="home-card grey">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/test-page/express-test.jpg`}
                        alt="Express test"
                        className="card-image"
                    />
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