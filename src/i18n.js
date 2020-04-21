import i18n from 'i18next';

const en = {
  "login-required": "You haven't logged in yet!",
  "no-project": "No such a project: {{i}}",
  "no-projects": "You have no projects.",
  "no-projects-hint": "Run `runkod create` to create your first project.",
  "login": {
    "input-label": "Enter your api key:",
    "input-error": "Empty key received",
    "success": "👍 Logged in as {{name}} <{{email}}>"
  },
  "logout": {
    "message": "👋 Bye"
  },
  "create": {
    "input-label": "Enter a project name or leave it empty for a random name:",
    "success": "✅ New project has been created."
  },
  "list": {
    "count-label-single": "1 project",
    "count-label": "{{n}} projects"
  }
};

const resources = {
  en: {
    translation: en
  }
};

i18n.init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
}).then();

export const _t = (k, args = {}) => {
  return i18n.t(k, args);
};
