import { describe, expect, it } from "vitest";
import DaySchedule from "../DaySchedule";
import { DAY_SCHEDULE_ERROR_MESSAGE_KEY } from "../constants";

describe("DaySchedule entity", () => {
  const validPayload = {
    open: "08:00",
    close: "18:00",
    isClosed: false,
  };

  const schedule: DaySchedule = new DaySchedule(
    validPayload.open,
    validPayload.close,
    validPayload.isClosed,
  );

  describe("constructor success case", () => {
    it("should create DaySchedule entity when payload is valid", () => {
      expect(schedule.getOpen()).toBe(validPayload.open);
      expect(schedule.getClose()).toBe(validPayload.close);
      expect(schedule.getIsClosed()).toBe(validPayload.isClosed);
    });
  });

  describe("constructor error case", () => {
    it("should throw error when open is blank", () => {
      expect(() => {
        new DaySchedule("", validPayload.close, validPayload.isClosed);
      }).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when close is blank", () => {
      expect(() => {
        new DaySchedule(validPayload.open, "", validPayload.isClosed);
      }).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when invalid time open", () => {
      expect(() => {
        new DaySchedule("8:30", validPayload.close, validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule("25:00", validPayload.close, validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule("22.00", validPayload.close, validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule("22.99", validPayload.close, validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule("abcd", validPayload.close, validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);
    });

    it("should throw error when invalid time close", () => {
      expect(() => {
        new DaySchedule(validPayload.open, "8:30", validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule(validPayload.open, "25:00", validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule(validPayload.open, "22.00", validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule(validPayload.open, "22.99", validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);

      expect(() => {
        new DaySchedule(validPayload.open, "abcd", validPayload.isClosed);
      }).toThrowError(`${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`);
    });
  });

  describe("setter success case", () => {
    it("should update open when valid", () => {
      schedule.setOpen(validPayload.open);
      expect(schedule.getOpen()).toBe(validPayload.open);
    });

    it("should update close when valid", () => {
      schedule.setClose(validPayload.close);
      expect(schedule.getClose()).toBe(validPayload.close);
    });

    it("should update isClosed when valid", () => {
      schedule.setIsClosed(validPayload.isClosed);
      expect(schedule.getIsClosed()).toBe(validPayload.isClosed);
    });
  });

  describe("setter error case", () => {
    it("should throw error when setting blank open", () => {
      expect(() => schedule.setOpen("")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting blank close", () => {
      expect(() => schedule.setClose("")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.NOT_CONTAIN_NEEDED_PROPERTY`,
      );
    });

    it("should throw error when setting invalid time format open", () => {
      expect(() => schedule.setOpen("8:30")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setOpen("25:00")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setOpen("22.00")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setOpen("22.99")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setOpen("abcd")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );
    });

    it("should throw error when setting invalid time format close", () => {
      expect(() => schedule.setClose("8:30")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setClose("25:00")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setClose("22.00")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setClose("22.99")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );

      expect(() => schedule.setClose("abcd")).toThrowError(
        `${DAY_SCHEDULE_ERROR_MESSAGE_KEY}.INVALID_TIME_FORMAT`,
      );
    });
  });
});
