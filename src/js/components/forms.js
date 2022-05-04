import JustValidate from 'just-validate';
import Inputmask from "inputmask";

const formCallback = document?.querySelector('.callback__form');
const formPresentation = document?.querySelector('#modal-presentation');
const formBusiness = document?.querySelector('#modal-business');
const formConsulting = document?.querySelector('#modal-consulting');
const formCity = document?.querySelector('#modal-city');
const callbackTelSelector = formCallback?.querySelector('input[type="tel"]');
const presentationTelSelector = formPresentation?.querySelector('input[type="tel"]');
const businessTelSelector = formBusiness?.querySelector('input[type="tel"]');
const consultingTelSelector = formConsulting?.querySelector('input[type="tel"]');
const cityTelSelector = formCity?.querySelector('input[type="tel"]');

const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(callbackTelSelector);
inputMask.mask(presentationTelSelector);
inputMask.mask(businessTelSelector);
inputMask.mask(consultingTelSelector);
inputMask.mask(cityTelSelector);

const validationCallback = new JustValidate(formCallback);

validationCallback
    .addField('#client-phone', [
      {
        rule: 'function',
        validator: function() {
          const phone = callbackTelSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите правильный номер телефона'
      },
      {
        rule: 'required',
        errorMessage: 'Номер телефона обязателен'
      }
    ])
    .addRequiredGroup('.form__buttons', 'Выберите метод для связи')

validationCallback.onSuccess((ev) => {
  let formData = new FormData(ev.target);

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        if (afterSend) {
          afterSend();
        }
        console.log('Отправлено');
      }
    }
  }

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);

  ev.target.reset();
})

const validationPresentation = new JustValidate(formPresentation);

validationPresentation
    .addField('#client-name-presentation', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
      },
    ])
    .addField('#client-phone-presentation', [
      {
        rule: 'function',
        validator: function() {
          const phone = presentationTelSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите правильный номер телефона'
      },
      {
        rule: 'required',
        errorMessage: 'Номер телефона обязателен'
      }
    ])
    .addField('#checkbox-rule-presentation', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться с политикой конфиденциальности'
      },
    ])
    .addRequiredGroup('.form__buttons--presentation', 'Выберите метод для связи')

const validationBusiness = new JustValidate(formBusiness);

validationBusiness
    .addField('#client-name-business', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
      },
    ])
    .addField('#client-phone-business', [
      {
        rule: 'function',
        validator: function() {
          const phone = businessTelSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите правильный номер телефона'
      },
      {
        rule: 'required',
        errorMessage: 'Номер телефона обязателен'
      }
    ])
    .addField('#checkbox-rule-business', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться с политикой конфиденциальности'
      },
    ])
    .addRequiredGroup('.form__buttons--business', 'Выберите метод для связи')

const validationConsulting = new JustValidate(formConsulting);

validationConsulting
    .addField('#client-name-consulting', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
      },
    ])
    .addField('#client-phone-consulting', [
      {
        rule: 'function',
        validator: function() {
          const phone = consultingTelSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите правильный номер телефона'
      },
      {
        rule: 'required',
        errorMessage: 'Номер телефона обязателен'
      }
    ])
    .addField('#checkbox-rule-consulting', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться с политикой конфиденциальности'
      },
    ])
    .addRequiredGroup('.form__buttons--consulting', 'Выберите метод для связи')

const validationCity = new JustValidate(formCity);

validationCity
    .addField('#client-name-city', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Введите корректное имя'
      },
      {
        rule: 'required',
        errorMessage: 'Как вас зовут?'
      },
    ])
    .addField('#client-phone-city', [
      {
        rule: 'function',
        validator: function() {
          const phone = cityTelSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите правильный номер телефона'
      },
      {
        rule: 'required',
        errorMessage: 'Номер телефона обязателен'
      }
    ])
    .addField('#checkbox-rule-city', [
      {
        rule: 'required',
        errorMessage: 'Вы должны согласиться с политикой конфиденциальности'
      },
    ])
    .addRequiredGroup('.form__buttons--city', 'Выберите метод для связи')
