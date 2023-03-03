import { ApplicationError } from "@/protocols";

export function notFoundError(): ApplicationError {
    return {
      name: "notFoundError",
      message: "NotHaveDataForThisDay",
    };
  }

  export function badRequestError(): ApplicationError {
    return {
      name: "badRequestError",
      message: "NotHaveDataForThisDay",
    };
  }

