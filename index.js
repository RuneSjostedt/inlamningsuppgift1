// accordion
var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    for (let j = 0; j < acc.length; j++) {
      if (j !== i) {
        acc[j].classList.remove("active");
        var otherPanel = acc[j].nextElementSibling;
        otherPanel.style.maxHeight = null;

        const otherAccordionBtn = acc[j].querySelector('.btn-circle');
        otherAccordionBtn.style.backgroundColor = '';

        const otherIcon = otherAccordionBtn.querySelector('i');
        if (otherIcon.classList.contains('fa-angle-up')) {
          otherIcon.classList.remove('fa-angle-up');
          otherIcon.classList.add('fa-angle-down');
          otherIcon.style.color = '';
        }
      }
    }

    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    const accordionBtn = this.querySelector('.btn-circle');
    const currentBg = accordionBtn.style.backgroundColor;

    if (currentBg === 'var(--color-primary)') {
      accordionBtn.style.backgroundColor = '';
    } else {
      accordionBtn.style.backgroundColor = 'var(--color-primary)';
    }

    const icon = accordionBtn.querySelector('i');
    if (icon) {
      if (icon.classList.contains('fa-angle-down')) {
        icon.classList.remove('fa-angle-down');
        icon.classList.add('fa-angle-up');
        icon.style.color = 'white';
      } else {
        icon.classList.remove('fa-angle-up');
        icon.classList.add('fa-angle-down');
        icon.style.color = '';
      }
    }
  });
}
// darkmode
const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        enableDarkMode()
    } else {
        disableDarkMode()
    }
} else if(hasDarkmode === 'on') {
    enableDarkMode()
} else if(hasDarkmode === 'off') {
    disableDarkMode()
}



darkmodeSwitch.addEventListener('change', () => {
    if(darkmodeSwitch.checked) {
        enableDarkMode()
        localStorage.setItem('darkmode','on')
    } else {
        disableDarkMode()
        localStorage.setItem('darkmode','off')
    }
})

function enableDarkMode() {
    darkmodeSwitch.checked = true
    document.documentElement.classList.add('dark')
}
function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElement.classList.remove('dark')
}

// subscribe email form

const subscribeForm = document.querySelector('.subscribeForm');

subscribeForm.addEventListener('submit', e => {
  e.preventDefault ()
})
