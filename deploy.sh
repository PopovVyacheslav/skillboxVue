# сборка проекта
npm run build
# переход в папку dist
cd dist
# инициализация git
git init
# добавление всех файлов
git add -A
# фиксация изменений
git commit -m 'deploy'
# публикация изменений на gitpages
git push -f git@github.com:PopovVyacheslav/skillbox-vue-app.git master:gh-pages
