import React from 'react';
import '../styles.css'

const StudentProfile = () => {

    return (
        <div>
            <div className="title">
                <div className="title__text">Александр Виниченко</div>
            </div>
          <div className="profile">
            <div className="profile__header">
              <div className="profile__avatar"/>
              <div className="profile__lvl">уровень</div>
            </div>
            <div className="profile__description">Описание</div>
            <div className="profile__projects">Проекты</div>
          </div>
        </div>
    );
};

export default StudentProfile;
