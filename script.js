document.querySelectorAll('.answer-option').forEach((option) => {
  option.addEventListener('click', () => {
    const feedback = document.getElementById('quizFeedback');
    const options = document.querySelectorAll('.answer-option');
    options.forEach((item) => {
      item.classList.remove('is-correct', 'is-wrong');
      item.disabled = false;
    });

    if (option.dataset.answer === 'correct') {
      option.classList.add('is-correct');
      feedback.textContent = 'မှန်ပါတယ်။ ရေ၊ လေ၊ ရေခဲတို့က ကျောက်မှုန်တွေကို တိုက်စားပြီး သယ်ဆောင်ပေးပါတယ်။';
      feedback.style.color = '#64804e';
    } else {
      option.classList.add('is-wrong');
      feedback.textContent = 'မမှန်သေးပါဘူး။ ပြိုကွဲနေတဲ့ အပိုင်းအစတွေကို ရွေ့လျားသယ်ဆောင်ပေးတဲ့ လုပ်ငန်းစဉ်ကို ပြန်စဉ်းစားကြည့်ပါ။';
      feedback.style.color = '#a45e50';
    }
  });
});

document.querySelectorAll('.dropdown-menu .dropdown-item, .navbar-nav .nav-link[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('mainMenu');
    if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
  });
});

document.querySelectorAll('.process-card[data-topic]').forEach((card) => {
  const openLesson = () => { window.location.href = card.dataset.page || `lesson.html?topic=${card.dataset.topic}#introduction`; };
  card.addEventListener('click', openLesson);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLesson(); }
  });
});
