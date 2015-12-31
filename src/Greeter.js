// ---------------------------------------------------------------------------
// --- Nils Hartmann | http://nilshartmann.net                             ---
// ---------------------------------------------------------------------------

export default class Greeter {
  constructor(prefix) {
    this.prefix = prefix;
  }

  greet(name) {
    return `${this.prefix}, ${name}`;
  }
}
