let form = document.querySelector('#randomRange');

form.onsubmit = async function (event) {
  event.preventDefault();

  const inputs = [...form.querySelectorAll('input[type="number"]')];

  let [min, max] = inputs.map((input) => input.value);

  let fetchOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({min, max}),
  };

  let response = await fetch('/random', fetchOptions);

  let data = await response.json();
  let pre = document.createElement('pre');

  pre.innerText = JSON.stringify(data, null, 2);

  document.body.append(pre);
  event.target.reset();
  form.firstElementChild.focus();
};
