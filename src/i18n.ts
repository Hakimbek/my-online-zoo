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
        donation: {
          title: 'Your donation makes a difference!',
          content:
            "The Online Zoo's animal webcams are some of the most famous on the internet. Tune in to watch your favourite animals — live, 24/7!",
          subTitle: 'Quick Donate',
          button: '$ Donation Amount',
        },
        pets: {
          title: 'Meet some our Pets',
          content:
            "Do you have a special place in your heart for animals? Who are your favorites? Perhaps you'd like to donate to special ones or all our pets? We think it's important for you to choose how your donation is used.",
          favourite: 'Choose your favourite',
        },
        feed: {
          title: 'PAY AND FEED',
          firstCard: {
            title: 'Your donation has an impact',
            content:
              'Providing our animals with high-quality nutritious diets is just one element of animal care at our Zoo. We do all the best so that our animals can eat food similar to what they might find in their natural habitats while making sure they get the right mix of nutrients, proteins, and vitamins to be happy and healthy. Please help us provide nutritious food for our animals by donating.',
          },
          secondCard: {
            title: 'Make a donation',
            content:
              "You can donate through your credit card without any fees. It is easy and safe. We do not keep donors' personal information on an online network. Choose an amount to give and the pet's name if needed.",
          },
          thirdCard: {
            title: 'Bring your food charity — straight to your favorites pets.',
            content:
              'After your donation, the animal receives its favorite foods. You can support your favorite animals or any animal you care about and make a real personal impact. Never doubt that your donation can make a difference even if it is small.',
          },
        },
        feedback: {
          title: 'What our users think',
          content:
            'We are continuously striving to improve the experiences of our future guests. Below you can leave your own feedback, or simply view feedback from past clients.',
          feedback: 'leave feedback',
        },
        care: {
          title: 'care for the animals you love',
          content:
            'You can help to look after the animals you love with your gift today',
          favourite: 'Choose your favourite',
          feed: 'Feed',
          cards: {
            first:
              'Your $30 could give Lucas a slice of panda cake, made with our secret recipe.',
            second:
              "With your support, we can give Andy his favorite fruits. Especially when it's not fruit season in its natural habitat.",
            third:
              'Your $150 will help to care for Senja, a Sumatran tiger, for three weeks.',
            forth:
              'Sam & Lora have hatched and raised numerous young and will be happy with your help.',
          },
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
        donation: {
          title: 'Ваше пожертвование имеет значение!',
          content:
            'Веб-камеры Онлайн-Зоопарка — одни из самых известных в интернете. Присоединяйтесь, чтобы наблюдать за вашими любимыми животными в прямом эфире 24/7!',
          subTitle: 'Быстрое пожертвование',
          button: '$ Пожертвования',
        },
        pets: {
          title: 'Выбери любимца',
          content:
            'В вашем сердце есть особое место для животных? Кто из них вам нравится больше всего? Возможно, вы захотите сделать пожертвование конкретному подопечному или всем нашим питомцам сразу? Мы считаем, что для вас важно иметь возможность самим выбирать, на что пойдет ваша помощь.',
          favourite: 'Питомцы',
        },
        feed: {
          title: 'НАКОРМИТЬ',
          firstCard: {
            title: 'Ваше пожертвование имеет значение',
            content:
              'Обеспечение наших животных высококачественным и питательным рационом — это лишь один из аспектов заботы в нашем зоопарке. Мы делаем всё возможное, чтобы наши подопечные могли питаться так же, как в естественной среде обитания, при этом следя за тем, чтобы они получали правильное сочетание питательных веществ, белков и витаминов для здоровья и благополучия. Пожалуйста, помогите нам обеспечить животных полезной едой, сделав пожертвование.',
          },
          secondCard: {
            title: 'Сделать пожертвование',
            content:
              'Вы можете внести пожертвование с помощью банковской карты без каких-либо комиссий. Это просто и безопасно. Мы не храним личные данные доноров в онлайн-сети. Выберите сумму и, при желании, имя конкретного питомца.',
          },
          thirdCard: {
            title:
              'Направьте свою заботу и еду напрямую вашим любимым питомцам.',
            content:
              'После вашего пожертвования животное получит свой любимый корм. Вы можете поддержать своих любимцев или любое животное, которое вам небезразлично, и внести свой личный вклад. Никогда не сомневайтесь в том, что ваше пожертвование может что-то изменить, даже если оно небольшое.',
          },
        },
        feedback: {
          title: 'Что думают пользователи',
          content:
            'Мы постоянно стремимся улучшать качество обслуживания для наших будущих гостей. Ниже вы можете оставить свой отзыв или просто ознакомиться с отзывами наших прошлых клиентов.',
          feedback: 'Оставить отзыв',
        },
        care: {
          title: 'Заботьтесь о любимых животных',
          content:
            'Ваше пожертвование сегодня поможет нам заботиться о животных, которых вы любите',
          favourite: 'Выберите любимца',
          feed: 'КОРМИТЬ',
          cards: {
            first:
              'Ваши $30 могут подарить панде Лукасу порцию панда-кейка, приготовленного по нашему секретному рецепту.',
            second:
              'С вашей поддержкой мы сможем давать Энди его любимые фрукты. Особенно в те сезоны, когда они не растут в его естественной среде обитания.',
            third:
              'Ваши $150 помогут обеспечивать уход за суматранским тигром Сеньей в течение трёх недель.',
            forth:
              'Сэм и Лора вывели и вырастили множество птенцов, и они будут рады вашей помощи.',
          },
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
