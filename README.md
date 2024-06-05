# React + Vite + MUI

Написано на React + Vite + MUI. Этот проект представляет собой простую верстку на React без включения бизнес-логики.
Он создан с целью демонстрации навыков разработки пользовательского интерфейса с использованием библиотеки React.

## Оглавление

- [Установка](#установка)
- [Запуск проекта](#Запуск-проекта)
- [Структура проекта](#структура-проекта)
- [Компоненты и Страницы](#компоненты-и-страницы)

## Установка

1. Клонируйте репозиторий: `https://github.com/AzaZefir/geekart-test.git`
2. Перейдите в каталог проекта: `cd geekart-test`
3. Установите зависимости: `npm install`

## Запуск проекта

Выполните команду: `npm run dev`

Приложение будет доступно по адресу [http://localhost:5173](http://localhost:5173).

## Структура проекта

- **assets**: Содержит иконки и изображения для использования в проекте.
- **auth**: Отвечает за аутентификацию и регистрацию пользователей.
  - **login**: Страница входа в систему. [Компонент Login](#Компонент-Login)
    - **loginModal**: Модальное окно для входа в систему.
      - **phoneInputController**: Контроллер ввода телефонного номера.
  - **phoneNumberConfirmation**: Страница подтверждения номера телефона.
  - **register**: Страница регистрации нового пользователя.
    - **registerModal**: Модальное окно для регистрации.
    - **registerModalWithSteps**: Модальное окно регистрации с шагами.
      - **registerModalContent**: Содержимое модального окна регистрации.
        - **registerModalFooter**: Подвал модального окна регистрации.
        - **registerSteps**: Шаги регистрации.
      - **registerModalHeader**: Заголовок модального окна регистрации.
- **components**: Содержит компоненты, используемые в проекте. 
  - **header**: Компоненты для заголовка страницы.[Компонент Header](#Компонент-Header)
    - **headerLinks**: Ссылки в заголовке.[Компонент HeaderLinks](#Компонент-HeaderLinks)
    - **headerMenu**: Меню в заголовке.[Компонент HeaderMenu](#componentsheaderheadermenu)
    - **headerMobileDrower**: Мобильное меню заголовка.[Компонент HeaderMobileDrower](#Компонент-HeaderMobileDrower)
      - **mobileLangChange**: Компоненты для изменения языка в мобильном меню.
      - **mobileNavs**: Навигационные ссылки в мобильном меню.
      - **mobileProfileMenu**: Меню профиля в мобильном меню.
  - **main**: Основные компоненты страницы.[Компонент Main](#Компонент-Main)
    - **articleSection**: Секция статьи.[Компонент ArticleSection](#Компонент-ArticleSection)
      - **articleComments**: Комментарии к статье.[Компонент ArticleComments](#Компонент-ArticleComments)
      - **articleHeader**: Заголовок статьи.
      - **articleImages**: Изображения статьи.
      - **articleText**: Текст статьи.
      - **articleViewCounter**: Счетчик просмотров статьи.
    - **mobileArticleSection**: Мобильная версия секции статьи.
    - **newsFeed**: Лента новостей.
    - **sideBar**: Боковая панель страницы.
      - **ads**: Рекламные блоки в боковой панели.
      - **filter**: Фильтры в боковой панели.
  - **maxWidthWrapper**: Обертка с максимальной шириной контента.
  - **profile**: Компоненты для страницы профиля пользователя.
    - **interestingSubscriptions**: Интересные подписки пользователя.
    - **userInfoSection**: Секция информации о пользователе.
      - **birthDandPhoneInfo**: Информация о дне рождения и телефоне.
      - **footerBtns**: Кнопки в подвале страницы профиля.
      - **mainUserInfo**: Основная информация о пользователе.
  - **ui**: Компоненты пользовательского интерфейса.
- **context**: Контексты для управления состоянием приложения.
- **data**: Данные приложения (например, константы, локализация и т.д.).
- **helper**: Вспомогательные функции и утилиты.
- **pages**: Страницы приложения.
- **routes**: Маршруты и навигация приложения.
- **theme**: Темы и стили приложения.

## Компоненты и Страницы

### [Компонент Login]
![Login modal](https://res.cloudinary.com/drdqjr8r6/image/upload/v1717595424/bg%20images/gh/login_fogkhj.png)

### [Компонент Header]
![Header](https://res.cloudinary.com/drdqjr8r6/image/upload/v1717595423/bg%20images/gh/header_pggplu.png)

### [Компонент HeaderLinks]
![HeaderLinks](https://res.cloudinary.com/drdqjr8r6/image/upload/v1717595423/bg%20images/gh/header_pggplu.png)

### [Компонент HeaderMobileDrower]
![HeaderMobileDrower](https://res.cloudinary.com/drdqjr8r6/image/upload/v1717595423/bg%20images/gh/headerMobileDrower_z013uy.png)

### [Компонент Main]
![Main](https://res.cloudinary.com/drdqjr8r6/image/upload/v1717595425/bg%20images/gh/main_xkta5k.png)

### [Компонент ArticleSection]
![ArticleSection](https://res.cloudinary.com/drdqjr8r6/image/upload/v1717595424/bg%20images/gh/articleSection_eo8otd.png)

### [Компонент ArticleComments]
![ArticleComments](https://res.cloudinary.com/drdqjr8r6/image/upload/v1717595423/bg%20images/gh/articleComment_fvbupt.png)
