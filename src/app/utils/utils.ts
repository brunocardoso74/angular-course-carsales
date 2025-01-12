'Retorna o nome do método atual'
export function getMethodName(): string {
    const error = new Error();
    const stack = error.stack?.split('\n');
    if (stack && stack.length > 2) {
      const methodLine = stack[2].trim();
      const methodName = methodLine.split(' ')[1];
      return methodName;
    }
    return 'unknown';
  }