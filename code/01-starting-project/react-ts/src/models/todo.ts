// Describe how our Todo will look like
class Todo {
  // In TS, we need to define these first
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;