/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination]);

const Project = (project) => {
  return (
    <SwiperSlide tag='li' key={project.id} className='swiper-slide main__project-item project'>
      <div className='project__img-wrapper'>
        <img src={project.img} alt='' className='project__img' />
        <p className='project__city'>{project.city}</p>
        <img src={project.logo} alt='' className='project__logo' />
      </div>
      <h3 className='project__title'>{project.title}</h3>
      <p className='project__info'>{project.info}</p>
      <div className='project__summary'>
        <div className='project__proportion'>
          {(project.money.ready / project.money.need) * 100 + '%'}
        </div>
        <div className='project__total'>
          <div className='project__total-info'>
            <p className='project__info-title'>необходимо собрать</p>
            <span>{project.money.ready}</span> из {project.money.need}
          </div>
          <div className='project__total-info'>
            <p className='project__info-title'>конец</p>
            {project.end}
          </div>
        </div>
      </div>
      <ul className='project__tag-list'>
        {project.tags.map(({ id, name, href }) => (
          <li key={id} className='project__tag-item'>
            <a href={href}>{name}</a>
          </li>
        ))}
      </ul>
      <a href='#' className='project__link'></a>
    </SwiperSlide>
  );
};

const Main = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Сбор средств для постойки школ в Индонезии Сбор средств для постойки школ в Индонезии Сбор средств для постойки школ в Индонезии Сбор средств для постойки школ в Индонезии Сбор средств для постойки школ в Индонезии',
      info:
        'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена. Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
      money: { need: 1000000, ready: 370000 },
      end: 'завтра',
      img: 'img/img01.png',
      city: 'Омск',
      tags: [
        { name: 'помощь нуждающимся', href: 'http://google.com', id: 1 },
        { name: 'закят', href: 'http://google.com', id: 2 },
        { name: 'закят', href: 'http://google.com', id: 3 },
        { name: 'закят', href: 'http://google.com', id: 4 },
      ],
      logo: 'img/logo01.png',
    },
    {
      id: 2,
      title: 'Поможем дедушке построить пекарню',
      info:
        'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
      money: { need: 1000000, ready: 840000 },
      end: 'завтра',
      img: 'img/img02.png',
      city: 'Омск',
      tags: [
        { name: 'помощь нуждающимся', href: 'http://google.com', id: 1 },
        { name: 'закят', href: 'http://google.com', id: 2 },
      ],
      logo: 'img/logo02.png',
    },
    {
      id: 3,
      title: 'Сбор для Арифулиной Дианы',
      info:
        'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
      money: { need: 1000000, ready: 100000 },
      end: 'завтра',
      img: 'img/img03.png',
      city: 'Омск',
      tags: [
        { name: 'помощь нуждающимся', href: 'http://google.com', id: 1 },
        { name: 'закят', href: 'http://google.com', id: 2 },
      ],
      logo: 'img/logo02.png',
    },
    {
      id: 4,
      title: 'Сбор для Арифулиной Дианы',
      info:
        'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
      money: { need: 1000000, ready: 100000 },
      end: 'завтра',
      img: 'img/img03.png',
      city: 'Омск',
      tags: [
        { name: 'помощь нуждающимся', href: 'http://google.com', id: 1 },
        { name: 'закят', href: 'http://google.com', id: 2 },
      ],
      logo: 'img/logo02.png',
    },
    {
      id: 5,
      title: 'Сбор для Арифулиной Дианы',
      info:
        'Диана — единственная и долгожданная! У нее сложный порок сердца и ей нужно провести еще одну операцию Фонтена',
      money: { need: 1000000, ready: 100000 },
      end: 'завтра',
      img: 'img/img03.png',
      city: 'Омск',
      tags: [
        { name: 'помощь нуждающимся', href: 'http://google.com', id: 1 },
        { name: 'закят', href: 'http://google.com', id: 2 },
      ],
      logo: 'img/logo02.png',
    },
  ]);

  const params = {
    breakpoints: {
      320: {
        slidesPerView: 1,
        pagination: {
          clickable: true
        },
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1140: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    className: 'main__project-list',
    tag: 'div',
    loop: true,
    wrapperTag: 'ul',
    pagination: {
      clickable: true
    },
  };

  return (
    <main className='main'>
      <div className='wrapper'>
        <h2 className='main__title'>проекты, которым необходимо помочь </h2>
        <Swiper {...params}>{projects.map((project) => Project(project))}</Swiper>
        <div className='main__all-project-link'>
          <div className='main__bar main__bar--left'></div>
          <a href='#'>Смотреть все проекты</a>
          <div className='main__bar main__bar--right'></div>
        </div>
      </div>
    </main>
  );
};

export default Main;
