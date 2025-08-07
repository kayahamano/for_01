const output = document.createElement('div');

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i !== 0) {
    const p = document.createElement('p');
    p.textContent = `${i}: 3の倍数です`;
    output.appendChild(p);
  }
}

document.body.appendChild(output);
