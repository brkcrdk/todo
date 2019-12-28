import { generateKey } from "./generateKey";
const mockTodos = [
  {
    job: "Spora git",
    isDone: false,
    id: generateKey("S")
  },
  {
    job: "Alışveriş yap",
    isDone: true,
    id: generateKey("A")
  },
  {
    job: "Kitap alınacak",
    isDone: false,
    id: generateKey("K")
  },
  {
    job:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eum, soluta dolores iusto nobis dolorum sapiente labore sint ab id laudantium ea alias, praesentium temporibus quo! Molestiae minima accusantium facilis",
    isDone: true,
    id: generateKey("L")
  },
  {
    job: "Ayın 6.sı sınav var",
    isDone: false,
    id: generateKey("A")
  }
];

export default mockTodos;
