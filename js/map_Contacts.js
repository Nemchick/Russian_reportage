const scriptElement = document.createElement('script');
scriptElement.type = 'text/javascript';
scriptElement.charset = 'utf-8';
scriptElement.async = true;
scriptElement.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac411bfef2afb339d087cccc6b3703248271b423199a83bdf06c9fb111eb2cf54&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=true';

const mapContainer = document.querySelector('.map_Contacts');
mapContainer.appendChild(scriptElement);