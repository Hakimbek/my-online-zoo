import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        zoos: 'Zoos',
        map: 'Map',
        contact: 'Contact us',
        design: 'Design',
      },
      common: {
        change_lang: 'EN',
        donate_for_volunteers: 'Donate for volunteers',
      },
      about: {
        animal: {
          title: 'Watch your favorite animal online',
          content:
            'Explore the exciting and mysterious world of wild animals in a natural setting without leaving your home.',
          button: 'View live cam',
        },
        welcome: {
          firstTitle: 'Welcome to the Online Zoo!',
          firstContent:
            'On our website, using live webcams, fans of all ages can observe various animals. Among them, are Giant pandas, eagles, alligators, forest gorillas, African lions, and others. It is the whole natural world in real-time in front of our cameras.',
          secondTitle: 'How we work',
          secondContent:
            "Online Zoo is a nonprofit committed to inspiring awareness and preservation of nature and wild animals in our zoo and worldwide. To continue these efforts, we need your help. We're so grateful to our supporters. All donations, large and small, go a long way to the conservation efforts of our pets.",
        },
      },
      zoo: {
        title: 'Find where are the animals live',
      },
      contact: {
        title: 'Get in touch',
        text: "Whether you have a question, or would like to say hello, we're happy to hear from you. Please use the form to send us a message and we'll get back to you as soon as we can. Whether you have a question, or would like to say hello, we're happy to hear from you. Please use the form to send us a message and we'll get back to you as soon as we can.",
        name: 'Your Name',
        email: 'Your Email Address',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        placeholders: {
          name: 'First and last name',
          email: 'Enter your email',
          subject: 'Enter the subject',
          message: 'Enter your message',
        },
        errors: {
          required: 'This field is required',
          invalid_email: 'Invalid Email',
        },
      },
    },
  },
  ru: {
    translation: {
      nav: {
        about: 'О нас',
        zoos: 'Зоо',
        map: 'Карта',
        contact: 'Контакты',
        design: 'Дизайн',
      },
      common: {
        change_lang: 'RU',
        donate_for_volunteers: 'Пожертвовать',
      },
      about: {
        animal: {
          title: 'Наблюдай животных онлайн',
          content:
            'Исследуйте захватывающий и таинственный мир диких животных в их естественной среде, не выходя из дома.',
          button: 'Смотреть',
        },
        welcome: {
          firstTitle: 'Добро пожаловать в Зоопарк!',
          firstContent:
            'На нашем сайте с помощью веб-камер в реальном времени любители природы всех возрастов могут наблюдать за различными животными. Среди них — большие панды, орлы, аллигаторы, лесные гориллы, африканские львы и многие другие. Это целый мир дикой природы в прямом эфире прямо перед нашими камерами.',
          secondTitle: 'Как мы работаем',
          secondContent:
            'Онлайн-Зоопарк — это некоммерческая организация, стремящаяся вдохновлять людей на сохранение природы и диких животных как в нашем зоопарке, так и по всему миру. Чтобы продолжать эту работу, нам нужна ваша помощь. Мы искренне благодарны нашим сторонникам. Любые пожертвования, большие и малые, вносят огромный вклад в дело сохранения наших подопечных.',
        },
      },
      zoo: {
        title: 'Узнайте, где живут животные',
      },
      contact: {
        title: 'Связаться',
        text: 'Если у вас есть вопрос или вы просто хотите поздороваться, мы будем рады вашему сообщению. Пожалуйста, воспользуйтесь формой, чтобы отправить нам письмо, и мы свяжемся с вами в ближайшее время.',
        name: 'Ваше имя',
        email: 'Ваш Email адрес',
        subject: 'Тема',
        message: 'Сообщение',
        send: 'Отправить',
        placeholders: {
          name: 'Имя и фамилия',
          email: 'Введите ваш email',
          subject: 'Введите тему',
          message: 'Введите ваше сообщение',
        },
        errors: {
          required: 'Это поле обязательно',
          invalid_email: 'Некорректный Email',
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
