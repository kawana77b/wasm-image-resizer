export class Path {
  static SPLITTER_DEFAULT = "/";
  static SPLITTER_WINDOWS = "\\";
  static SPLITTER_UNIX = this.SPLITTER_DEFAULT;

  static fromFile(file: File) {
    return new Path(file.name);
  }

  private _splitter: string = Path.SPLITTER_DEFAULT;
  private _path: string = "";
  constructor(path: string) {
    this._path = path;
  }

  get splitter() {
    return this._splitter;
  }

  set splitter(value: string) {
    this._splitter = value;
  }

  get fullname() {
    return this._path;
  }

  get dirname() {
    return this.split().slice(0, -1).join(this.splitter);
  }

  /**
   * the last part of the path.
   * @example
   * ```ts
   * const path = new Path("a/b/c.txt").basename; // -> c.txt
   * ```
   */
  get basename() {
    return this.split().pop() ?? "";
  }

  /**
   * the filename without the extension.
   * @example
   * ```ts
   * const path = new Path("a/b/c.txt").filename; // -> c
   * ```
   */
  get filename() {
    return this.basename.split(".").slice(0, -1).join(".") ?? "";
  }

  /**
   * the extension of the file.
   * @example
   * ```ts
   * const path = new Path("a/b/c.txt").ext; // -> txt
   * ```
   */
  get ext() {
    return this.basename.split(".").pop() ?? "";
  }

  split() {
    return this._path.split(this.splitter);
  }

  join(...parts: string[]) {
    return new Path([...this.split(), ...parts].join(this.splitter));
  }
}
