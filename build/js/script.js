'use strict';
(function () {
  window.load = function (onSuccess, onError) {
    var url = 'https://api.myjson.com/bins/eqqnt';
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSuccess(xhr.response);

      } else {
        onError('Request answer: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Connection error');
    });

    xhr.addEventListener('timeout', function () {
      onError('Request timeout ' + xhr.timeout + 'ms');
    });

    xhr.timeout = 10000;

    xhr.open('GET', url);
    xhr.send();
  };

})();

(function() {
  // Scroll to a certain element
  var triggerToScroll = document.querySelector('.intro__button');

  triggerToScroll.addEventListener('click', function() {
    document.querySelector('.customer-signin__wrapper').scrollIntoView({
      behavior: 'smooth'
    });
  })

})();

(function () {
  var onError = function (message) {
    console.log(message);
  };

  var onSuccess = function (data) {
    window.userInfo = data;
  };

  window.load(onSuccess, onError);
})();

(function () {
  var postIndexInput = document.querySelector('.map__post-index');
  var indexCheck = document.querySelector('.map__submit-button');
  var form = document.querySelector('.map__form');
  var value = null;

  var successTemplate = document.querySelector('#success')
        .content.querySelector(".success-popup");

  var errorTemplate = document.querySelector('#error')
        .content.querySelector(".error-popup");

  var main = document.querySelector('main');

  var message = document.querySelector('#success')
        .content.querySelector('.success-popup__message');

  indexCheck.addEventListener('click', function(evt) {

    postIndexInput.value;

    value = null;

    window.userInfo.forEach(function(currentVal, index, arr) {
      if (currentVal.pc.includes(postIndexInput.value)) {
        value = currentVal.value;
      }
    });

    console.log(value);
    console.log(postIndexInput.value.length);

    var closeSuccessPopupWindow = function () {
      var successPopup = document.querySelector('.success-popup');
      var closeSuccessPopup = document.querySelector('.success-popup__close');

      closeSuccessPopup.addEventListener('click', function (evt) {
        evt.preventDefault();
        successPopup.remove();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          successPopup.remove();
        }
      });
    };

    var closeErrorPopupWindow = function () {
      var errorPopup = document.querySelector('.error-popup');
      var closeErrorPopup = document.querySelector('.error-popup__close');

      closeErrorPopup.addEventListener('click', function (evt) {
        evt.preventDefault();
        errorPopup.remove();
      });

      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
          errorPopup.remove();
        }
      });
    };

    if (typeof(value) === 'string'
        && postIndexInput.value !== ''
        && postIndexInput.value.length === 5) {
      evt.preventDefault();
      console.log(value);
      message.innerHTML = 'In Ihrer Nachbarschaft gibt es ca. ' +  value
            + ' Douglas Loyalty Card Nutzer';

      main.appendChild(successTemplate);
      closeSuccessPopupWindow();

    } else {
      form.reset();
      main.appendChild(errorTemplate);
      closeErrorPopupWindow();
    }
    value = null;
  });
})();
