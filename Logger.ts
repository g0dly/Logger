interface LoggerOptions {
  managerOptions?: {
    format: LoggerFormatManagerOptions;
  };
}

class Logger implements LoggerUtil {
  public formats: LoggerFormatManager;

  constructor(options?: LoggerOptions) {
    this.formats = new LoggerFormatManager(
      options && options.managerOptions ? options.managerOptions.format : {}
    );
  }
}

class LoggerUtil {}

interface FormatList {
  [key: string]: Format;
}

interface LoggerFormatManagerOptions {
  importFormats?: object[];
}

class LoggerFormatManager {
  public defaultFormats: FormatList;

  constructor(options: LoggerFormatManagerOptions) {
    this.defaultFormats = {
      info: new Format({
        title: "Info",
        titleColor: "DFDFDF",
        date: true,
      }),
    };
  }
}

interface ContentOptions {
  text?: string;
  stack?: string[];
}

interface FormatOptions {
  title: string;
  titleColor?: string;
  textColor?: string;
  stackColor?: string;
  date?: boolean;
  numbered?: boolean;
}

class Format {
  private options: FormatOptions;
  public counter: number;

  constructor(options: FormatOptions) {
    this.options = options;
    this.counter = 1;
  }

  resolve(content: ContentOptions) {
    let resolved = '';

    resolved += `${this.options.numbered ? `${this.counter}. `: ''}[ ${this.options.title} ] ${this.options.date ? `@${(new Date()).toLocaleString()} ` : ''}"${content.text}"`;

    return resolved
  }

  test() {
    console.log(this.options.title);
  }
}

//

const log = new Logger();

console.log(log.formats.defaultFormats.info.resolve({ text: 'hi' }));
