import InputValidator from "../utils/InputValidator";
import { DAY_SCHEDULE_ERROR_MESSAGE_KEY } from "./constants";

class DaySchedule {
  private open: string;
  private close: string;
  private isClosed: boolean;

  constructor(open: string, close: string, isClosed: boolean) {
    this._verifyPayload(open, close);

    this.open = open;
    this.close = close;
    this.isClosed = isClosed;
  }

  private _verifyPayload(open: string, close: string) {
    InputValidator.requireNotBlank(open, DAY_SCHEDULE_ERROR_MESSAGE_KEY);
    InputValidator.requireNotBlank(close, DAY_SCHEDULE_ERROR_MESSAGE_KEY);

    InputValidator.isValidTimeFormat(open, DAY_SCHEDULE_ERROR_MESSAGE_KEY);
    InputValidator.isValidTimeFormat(close, DAY_SCHEDULE_ERROR_MESSAGE_KEY);
  }

  getOpen(): string {
    return this.open;
  }

  setOpen(open: string) {
    InputValidator.requireNotBlank(open, DAY_SCHEDULE_ERROR_MESSAGE_KEY);
    InputValidator.isValidTimeFormat(open, DAY_SCHEDULE_ERROR_MESSAGE_KEY);
    this.open = open;
  }

  getClose(): string {
    return this.close;
  }

  setClose(close: string) {
    InputValidator.requireNotBlank(close, DAY_SCHEDULE_ERROR_MESSAGE_KEY);
    InputValidator.isValidTimeFormat(close, DAY_SCHEDULE_ERROR_MESSAGE_KEY);
    this.close = close;
  }

  getIsClosed(): boolean {
    return this.isClosed;
  }

  setIsClosed(isClosed: boolean) {
    this.isClosed = isClosed;
  }
}

export default DaySchedule;
