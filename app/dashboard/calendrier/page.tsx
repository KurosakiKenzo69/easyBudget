"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type Value = Date | [Date, Date];

export default function CalendarPage() {
  const [value, setValue] = useState<Value>(new Date());

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
          Mon calendrier
        </h1>

        <Calendar
          onChange={setValue}
          value={value}
          className="rounded-lg border border-gray-200 p-2"
        />

        <p className="mt-6 text-center text-gray-600">
          📌 Sélection :{" "}
          <span className="font-semibold text-blue-600">
            {Array.isArray(value)
              ? `${value[0].toLocaleDateString(
                  "fr-FR"
                )} → ${value[1].toLocaleDateString("fr-FR")}`
              : value.toLocaleDateString("fr-FR")}
          </span>
        </p>
      </div>
    </div>
  );
}
