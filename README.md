# 📸 Photo Search App

Современное веб-приложение для поиска и просмотра изображений с использованием API Unsplash. Создано с помощью Next.js 14, TypeScript и Tailwind CSS.

![Photo Search App](https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=400&fit=crop)

## ✨ Возможности

- 🏠 **Главная страница** - 8 случайных изображений высокого качества
- 🔍 **Умный поиск** - быстрый поиск по ключевым словам с пагинацией
- 📱 **Адаптивный дизайн** - отлично работает на всех устройствах
- ❤️ **Избранное** - сохраняйте понравившиеся изображения
- 🖼️ **Детальный просмотр** - полная информация о фотографии
- ⚡ **Высокая производительность** - оптимизация изображений и кэширование
- 🎨 **Современный UI** - чистый и интуитивный интерфейс

## 🚀 Демо

**[Посмотреть живую демонстрацию →](https://your-app.vercel.app)**

## 🛠️ Технологии

- **Frontend**: Next.js 14, React 19, TypeScript
- **Стилизация**: Tailwind CSS, shadcn/ui
- **API**: Unsplash API
- **Деплой**: Vercel
- **Иконки**: Lucide React

## 📦 Установка и запуск

### Предварительные требования

- Node.js 18.0 или выше
- npm или yarn
- API ключ от Unsplash

### 1. Клонирование репозитория

\`\`\`bash
git clone https://github.com/your-username/unsplash-search-app.git
cd unsplash-search-app
\`\`\`

### 2. Установка зависимостей

\`\`\`bash
npm install

yarn install
\`\`\`

### 3. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

\`\`\`env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
\`\`\`

**Как получить API ключ:**

1. Зарегистрируйтесь на [Unsplash Developers](https://unsplash.com/developers)
2. Создайте новое приложение
3. Скопируйте Access Key

### 4. Запуск в режиме разработки

\`\`\`bash
npm run dev

# или

yarn dev
\`\`\`

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📁 Структура проекта

\`\`\`
unsplash-search-app/
├── app/ # App Router (Next.js 14)
│ ├── page.tsx # Главная страница
│ ├── search/ # Страница поиска
│ ├── photo/[id]/ # Детальный просмотр фото
│ └── favorites/ # Страница избранного
├── components/ # React компоненты
│ ├── ui/ # shadcn/ui компоненты
│ ├── navigation.tsx # Навигация
│ ├── photo-card.tsx # Карточка фото
│ └── search-bar.tsx # Поисковая строка
├── lib/ # Утилиты и API
│ ├── unsplash.ts # API клиент Unsplash
│ └── favorites.ts # Управление избранным
└── hooks/ # Пользовательские хуки
└── use-favorites.ts # Хук для избранного
\`\`\`

## 🎯 Основные функции

### Главная страница

- Отображение 8 случайных изображений
- Поисковая строка
- Навигация по разделам

### Поиск изображений

- Поиск по ключевым словам
- Пагинация результатов
- Адаптивная сетка изображений

### Детальный просмотр

- Полная информация о фотографии
- Данные об авторе
- Теги и метаданные
- Кнопки скачивания и добавления в избранное

### Избранное

- Локальное сохранение избранных фото
- Управление коллекцией
- Быстрый доступ к сохраненным изображениям

## 🚀 Деплой

### Vercel (рекомендуется)

1. Подключите репозиторий к Vercel
2. Добавьте переменную окружения `NEXT_PUBLIC_UNSPLASH_ACCESS_KEY`
3. Деплой произойдет автоматически

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/unsplash-search-app)

### Netlify

1. Подключите репозиторий к Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Добавьте переменные окружения

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие проекта! Вот как вы можете помочь:

1. Форкните репозиторий
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## 📝 Лицензия

Этот проект распространяется под лицензией MIT. Подробности в файле [LICENSE](LICENSE).

## 🙏 Благодарности

- [Unsplash](https://unsplash.com) за предоставление API и качественных изображений
- [Next.js](https://nextjs.org) за отличный фреймворк
- [shadcn/ui](https://ui.shadcn.com) за красивые компоненты
- [Tailwind CSS](https://tailwindcss.com) за удобную стилизацию

## 📞 Контакты

**Автор**: Ваше Имя

- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com
- LinkedIn: [Ваш профиль](https://linkedin.com/in/your-profile)

---

⭐ Если проект понравился, поставьте звездочку!

## 🔧 Скрипты

\`\`\`bash
npm run dev # Запуск в режиме разработки
npm run build # Сборка для продакшена
npm run start # Запуск продакшен сервера
npm run lint # Проверка кода линтером
\`\`\`

## 🐛 Известные проблемы

- [ ] Добавить темную тему
- [ ] Улучшить SEO оптимизацию
- [ ] Добавить бесконечную прокрутку
- [ ] Реализовать фильтры поиска

## 📈 Планы развития

- 🌙 Темная тема
- 🔍 Расширенные фильтры поиска
- 📱 PWA поддержка
- 🎨 Дополнительные источники изображений
- 👤 Система пользователей
