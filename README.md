# Template

Адаптивный проект SPA с роутингом страниц, и отправкой формы.

## Содержание

- [О проекте](#о-проекте)
- [Установка](#установка)
- [Хостинг](#хостинг)
- [Используемые технологии](#используемые-технологии)
- [Стратегии стилизации](#стратегии-стилизации)
- [SEO](#seo)

## О проекте

Приложение сделанное для выполнения тестового задания

## Установка

Для настройки проекта на своем локальном компьютере выполните следующие действия:

1. **Клонируйте репозиторий**:
   ```bash
   git clone https://github.com/ggertzog/template.git
2. **Перейдите в директорию проекта**:
   ```bash
   cd REPO_NAME
3. **Установите зависимости с помощью Yarn**:
   ```bash
   yarn install
4. **Запустите приложение**:
   ```bash
   yarn dev

## Хостинг
Приложение доступно на платформе vercel по ссылке https://template-indol.vercel.app/

## Используемые технологии

Yarn — менеджер пакетов для JavaScript.
Vite — современный сборщик для разработки и развертывания приложения.
React — библиотека для построения пользовательских интерфейсов.
React Router DOM — библиотека для маршрутизации в React-приложениях.
Ant Design (antd) — библиотека компонентов пользовательского интерфейса.
Styled-Components — библиотека для стилизации компонентов с использованием CSS-in-JS.
TypeScript (TS) — язык программирования, повышающий надежность и поддержку типов в JavaScript.
React Helmet — библиотека для управления заголовками и метаданными страниц для улучшения SEO.
Облачные функции — для выполнения серверного кода без необходимой инфраструктуры, например, для обработки запросов API.

## Стратегии стилизации

В данном проекте используется библиотека Styled-Components, позволяющая писать стили в JavaScript и управлять ими через компоненты. Это позволяет легко переиспользовать стили и создавать динамические стили в зависимости от пропсов.

Также были использованы стили от Ant Design, предлагающие готовые, адаптивные и доступные компоненты пользовательского интерфейса, что значительно ускоряет процесс разработки.

## SEO

Проект использует React Helmet для управления заголовками страниц и метаданными. Каждый маршрут имеет свои уникальные метатеги, улучшающие видимость приложения в поисковых системах:

- Уникальные заголовки для каждой страницы
- Описания и ключевые слова для SEO
- Настройки для мобильных устройств и тегов для социальных сетей
