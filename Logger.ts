class Format {

}

interface LoggerFormatManagerOptions {
    importFormats: object[]
}

class LoggerFormatManager {
    constructor(options: LoggerFormatManagerOptions) {

    }
}

interface LoggerOptions {
    managerOptions: {
        format: LoggerFormatManagerOptions
    }
}

class Logger {
    public formats: LoggerFormatManager;

    constructor(options: LoggerOptions) {
        this.formats = new LoggerFormatManager({ importFormats: options.managerOptions.format.importFormats })
    }
}