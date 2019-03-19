export function hello(name: string) {
  return `Hello, ${name}!`;
}

document.getElementById('main')!.innerText = hello('webpack');
