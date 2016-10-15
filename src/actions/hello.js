export const SAY_HELLO  = 'SAY_HELLO';
export function sayHello(name) {
   
  return { type: SAY_HELLO, name };

}