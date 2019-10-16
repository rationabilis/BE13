﻿Яндекс практикум. Когорта 1. Демин Александр. Спринт 13. Версия v1.0.1
=====================================================================

https://github.com/rationabilis/BE13.git
------------------------------------------------------

Back End продолжение предыдущего проекта "Место" на базе html, css и JS.
Проект сделан на базе фрейма Express.
В спринте 13 проект не включает фронт-энд.
Код предназначен для работы с пользователями и создаваемыми ими карточками.
Для пользователей возможно создание профиля, его обновление и обновление аватара, а также передача данных конкретного пользователя или всех пользователей.
Для карточек возможно создание, удаление, постановка и удаление лайков, а также передача данных всех карточек.

------------------------------------------------------
Хорошая работа, но нужно исправить несколько вещей:
1) Избавиться от ошибок линтера
2) Немного переделать роут на удаление карточки, к сожалению в текущем виде он не работает
3) Сделать так, чтобы при запросе несуществующего пользователя приходил соотвествующий ответ со статусом 404

Можно лучше:
1) Убрать из package.json старые зависимости, которые больше не используются

В остальном все супер, молодцы что разбиваете роуты на разные файлы

------------------------------------------------------

Все исправлено.


