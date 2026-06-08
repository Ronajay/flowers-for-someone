const title = document.querySelector('.title')
const text = `.`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.5rem'

for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `
      <span style="
        color: #ff4fd8;
        text-shadow:
          0 0 5px #ff4fd8,
          0 0 10px #ff4fd8,
          0 0 20px #ff4fd8,
          0 0 40px #ff00c8,
          0 0 80px #ff00c8;
        font-weight: bold;
      ">
        ${text[index]}
      </span>`
  } else {
    title.innerHTML += `<span style="width: 1rem"></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});
