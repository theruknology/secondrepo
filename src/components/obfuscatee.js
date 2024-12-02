export default function deobfuscateString(obfuscatedString) {
  const reverseString = (str) => str.split('').reverse().join('');
  const shiftChars = (str, shift) =>
    str
      .split('')
      .map((char) =>
        char.match(/[a-zA-Z0-9]/)
          ? String.fromCharCode(
              ((char.charCodeAt(0) -
                (char >= 'a' ? 97 : char >= 'A' ? 65 : 48) -
                shift +
                (char >= 'a' || char >= 'A' ? 26 : 10)) %
                (char >= 'a' || char >= 'A' ? 26 : 10)) +
                (char >= 'a' ? 97 : char >= 'A' ? 65 : 48)
            )
          : char
      )
      .join('');

  const part1 = 'btAK';
  const part2 = 'JtNzx';
  const part3 = '-w?si=';
  const part4 = 'rk8yypmf';
  const part5 = '9auvz8Bw';

  // Combine parts to get the original string
  return `${part1}${part2}${part3}${part4}${part5}`;
}
export function forUrl2() {
  const part1 = 'Z_yF'; 
  const part2 = '6QItr'; 
  const part3 = 'gw?si='; 
  const part4 = 'MzvW8btA'; 
  const part5 = 'O-OU8R4Q'; 
  return `${part1}${part2}${part3}${part4}${part5}`;
}
