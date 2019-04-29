export class Entry {
  question: String
  answer: String

  withEntry(q: String, a: String) {
    this.question = q;
    this.answer = a;
    return this;
  }
}