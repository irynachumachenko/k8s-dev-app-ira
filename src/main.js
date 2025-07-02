import { APP_URL_ID, ENV_LIST_ID, CONFIG_LIST_ID, configMapKeys } from './config';

document.addEventListener("DOMContentLoaded", () => {
  const appUrlEl = document.getElementById(APP_URL_ID);
  if (appUrlEl !== null) {
    appUrlEl.textContent = window.location.href;
  }

  const envList = document.getElementById(ENV_LIST_ID);
  if (envList !== null) {
    const listItems = Object.entries(import.meta.env).map(([key, val]) => (`
      <tr>
        <td>${key}</td>
        <td>${val}</td>
      </tr>
    `));
    envList.innerHTML = listItems.join('\n');
  }

  const configMapList = document.getElementById(CONFIG_LIST_ID);
  if (configMapList !== null) {
    const listItems = configMapKeys.map((key) => (`
      <tr>
        <td>${key}</td>
        <td>${import.meta.env[key]}</td>
      </tr>
    `));
    configMapList.innerHTML = listItems.join('\n');
  }
});
