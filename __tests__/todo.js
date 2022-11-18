/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const todoList = require("../todo");
// eslint-disable-next-line no-unused-vars
// adding all , add and markAsComplete functions.
const { all, add, markAsComplete } = todoList();
// testing starts here
describe("Testing my todo app:", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  // second test starts for adding new todo`
  test("Should add new todo ", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(todoItemCount + 1);
  });
  //third test starts here.
  test("Should mark todo  as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  // fourth test starts here
  test("Should retrieve today items", () => {
    expect(all.dueToday).toBe(all.dueDate);
  });
  // the last test starts here
  test("Should retrieve overdue items.", () => {
    expect(all.dueDate).toBe(all.overdue);
  });
  test("Should check due later items", () => {
    expect(all.dueDate).toBe(all.dueLater);
  });
});
